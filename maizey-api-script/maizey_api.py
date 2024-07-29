import requests
import os


def create_conversation(project_pk, api_key):
    base_url = 'https://umgpt.umich.edu/maizey/api/projects/'
    creat_conversation_url = f"{base_url}{project_pk}/conversation/"
    headers = {
        'accept': 'application/json',
        'Authorization': f"Bearer {api_key}",
        'Content-Type': 'application/json',
    }
    response = requests.post(creat_conversation_url, headers=headers)
    if response.status_code != 201:
        print("Failed", response.text)
        return None
    return response.json()["pk"]


def call_api(project_pk, conversation_pk, api_key, topic):
    base_url = 'https://umgpt.umich.edu/maizey/api/projects/'
    creat_conversation_url = f"{base_url}{project_pk}/conversation/{conversation_pk}/messages/"

    custom_prompt = f"Your topic is {topic}. Here is an example of the types of threats we are looking for related to {topic}.\n" \
                    "Examples of threat titles and summaries:\n" \
                    "Title: War in Ukraine spills over to a NATO member\n" \
                    "Description: Current setback of Russia in Ukraine could lead Russia to shock reactions.\n" \
                    "Title: Oil production or export facilities in KSA/Kuwait/UAE disrupted by attack\n" \
                    "Description: Large oil and gas fields and export facilities tend to be quite concentrated geographically and can be vulnerable to attack; likelihood is very low due to intense security.\n" \
                    "Title: Widespread flooding in South Asia\n" \
                    "Description: Massive flooding in South Asia leads to intense migration flows; greater dependence on China and Russia for food potentially shifting world power equilibrium/balance.\n" \
                    f"Please return a json object list of threats related to {topic} with all the components requested including summaries and rankings based on appropriate files.\n"

    headers = {
        'accept': 'application/json',
        'Authorization': f"Bearer {api_key}",
        'Content-Type': 'application/json',
    }

    data = {
        "query": custom_prompt,
    }

    response = requests.post(creat_conversation_url, headers=headers, json=data)
    if response.status_code != 201:
        print("Failed", response.text)
        return None
    return response.json()["response"]


def main():
    print("Starting")
    project_pk = os.environ.get('PROJECT_PK')
    print(project_pk)
    api_key = os.environ.get('API_KEY')
    conversation_pk = create_conversation(project_pk, api_key)
    print(conversation_pk)
    if not conversation_pk:
        return
    file = os.environ.get('QUERY_FILE')
    print(file)

    with open(file, "r") as f:
        queries = f.readlines()
        print(queries)
        for topic in queries:
            print(topic)
            response = call_api(project_pk, conversation_pk, api_key, topic)
            print(response)


if __name__ == '__main__':
    main()