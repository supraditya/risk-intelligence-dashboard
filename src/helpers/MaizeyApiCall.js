

async function createConversation(PROJECT_PK, API_KEY) {
  const baseUrl = "https://umgpt.umich.edu/maizey/api/projects/";
  const createConversationUrl = `${baseUrl}${PROJECT_PK}/conversation/`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(createConversationUrl, {
      method: "POST",
      headers: headers,
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

async function callApi(PROJECT_PK, conversationPk, API_KEY, topic) {
  const baseUrl = "https://umgpt.umich.edu/maizey/api/projects/";
  const createConversationUrl = `${baseUrl}${PROJECT_PK}/conversation/${conversationPk}/messages/`;

  const customPrompt =
    `Your topic is ${topic}. Here is an example of the types of threats we are looking for related to ${topic}.\n` +
    "Examples of threat titles and summaries:\n" +
    "Title: War in Ukraine spills over to a NATO member\n" +
    "Description: Current setback of Russia in Ukraine could lead Russia to shock reactions.\n" +
    "Title: Oil production or export facilities in KSA/Kuwait/UAE disrupted by attack\n" +
    "Description: Large oil and gas fields and export facilities tend to be quite concentrated geographically and can be vulnerable to attack; likelihood is very low due to intense security.\n" +
    "Title: Widespread flooding in South Asia\n" +
    "Description: Massive flooding in South Asia leads to intense migration flows; greater dependence on China and Russia for food potentially shifting world power equilibrium/balance.\n" +
    `Please return a json object list of threats related to ${topic} with all the components requested including summaries and rankings based on appropriate files.\n`;

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const data = {
    query: customPrompt,
  };

  try {
    const response = await fetch(createConversationUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
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

export async function repopulateDb() {
  console.log("Starting");
  const PROJECT_PK = process.env.NEXT_PUBLIC_PROJECT_PK;
  console.log(PROJECT_PK);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const conversationPk = await createConversation(PROJECT_PK, API_KEY);
  console.log(conversationPk);
  if (!conversationPk) {
    return;
  }
  const file = process.env.QUERY_FILE;
  console.log(file);

  const topics = [
    "Cybersecurity",
    "Security",
    "Healthcare",
    "Data Breach",
    "War",
    "Oil",
    "Flooding",
  ];

  try {
    // const queries = fs.readFileSync(file, "utf8").split("\n");
    // console.log(queries);
    topics.forEach(async (topic) => {
      console.log(topic);
      const response= await callApi(PROJECT_PK, conversationPk, API_KEY, topic);
      console.log(response);
    });
    // for (const topic of queries) {
    //   console.log(topic);
    //   const response = await callApi(
    //     PROJECT_PK,
    //     conversationPk,
    //     API_KEY,
    //     topic
    //   );
    //   console.log(response);
    // }
  } catch (error) {
    console.log("Failed", error.message);
  }
}
