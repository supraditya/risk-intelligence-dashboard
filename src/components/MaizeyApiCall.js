const fs = require('fs');
require('dotenv').config();

async function createConversation(projectPk, apiKey) {
    const baseUrl = 'https://umgpt.umich.edu/maizey/api/projects/';
    const createConversationUrl = `${baseUrl}${projectPk}/conversation/`;
    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(createConversationUrl, {
            method: 'POST',
            headers: headers
        });

        if (response.status !== 201) {
            const errorData = await response.json();
            console.log("Failed", errorData);
            return null;
        }
        
        const data = await response.json();
        return data.pk;
    } catch (error) {
        console.log("Failed", error.message);
        return null;
    }
}

async function callApi(projectPk, conversationPk, apiKey, topic) {
    const baseUrl = 'https://umgpt.umich.edu/maizey/api/projects/';
    const createConversationUrl = `${baseUrl}${projectPk}/conversation/${conversationPk}/messages/`;

    const customPrompt = `Your topic is ${topic}. Here is an example of the types of threats we are looking for related to ${topic}.\n` +
        "Examples of threat titles and summaries:\n" +
        "Title: War in Ukraine spills over to a NATO member\n" +
        "Description: Current setback of Russia in Ukraine could lead Russia to shock reactions.\n" +
        "Title: Oil production or export facilities in KSA/Kuwait/UAE disrupted by attack\n" +
        "Description: Large oil and gas fields and export facilities tend to be quite concentrated geographically and can be vulnerable to attack; likelihood is very low due to intense security.\n" +
        "Title: Widespread flooding in South Asia\n" +
        "Description: Massive flooding in South Asia leads to intense migration flows; greater dependence on China and Russia for food potentially shifting world power equilibrium/balance.\n" +
        `Please return a json object list of threats related to ${topic} with all the components requested including summaries and rankings based on appropriate files.\n`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data = {
        query: customPrompt,
    };

    try {
        const response = await fetch(createConversationUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.status !== 201) {
            const errorData = await response.json();
            console.log("Failed", errorData);
            return null;
        }
        
        const responseData = await response.json();
        return responseData.response;
    } catch (error) {
        console.log("Failed", error.message);
        return null;
    }
}

async function main() {
    console.log("Starting");
    const projectPk = process.env.PROJECT_PK;
    console.log(projectPk);
    const apiKey = process.env.API_KEY;
    const conversationPk = await createConversation(projectPk, apiKey);
    console.log(conversationPk);
    if (!conversationPk) {
        return;
    }
    const file = process.env.QUERY_FILE;
    console.log(file);

    try {
        const queries = fs.readFileSync(file, 'utf8').split('\n');
        console.log(queries);
        for (const topic of queries) {
            console.log(topic);
            const response = await callApi(projectPk, conversationPk, apiKey, topic);
            console.log(response);
        }
    } catch (error) {
        console.log("Failed", error.message);
    }
}

main();
