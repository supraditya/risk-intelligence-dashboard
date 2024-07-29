import requests
import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json


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
                    f"Please return a json object list of threats related to {topic} with all the components requested including summaries and rankings based on appropriate files, \n" \
                    "and include links to the data sources used to generate a response. \n"

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


def push_to_db(data):
    # Path to your service account key JSON file
    cred = credentials.Certificate("/mnt/c/Users/liyufeim/risk intelligence/risk-intel-firebase-cred.json") # TODO: Change this to the path of the service account key JSON file

    # Initialize the app with a service account, granting admin privileges
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://risk-intel-db-default-rtdb.firebaseio.com/' # TODO: Change this to the URL of the Firebase database
    })

    # Get a database reference to our blog.
    ref = db.reference('/') # TODO: Change this to the path of the database you want to write to
    ref.set(data)

    print("Data pushed to db.")

def main():
    print("Starting")
    project_pk = os.environ.get('PROJECT_PK')
    print(project_pk)
    api_key = os.environ.get('API_KEY')
    conversation_pk = create_conversation(project_pk, api_key)
    print(conversation_pk)
    if not conversation_pk:
        return
    file_path = os.environ.get('QUERY_FILE')
    print(file_path)

    data = {}
    with open(file_path, "r") as f:
        queries = json.load(f)
        print(queries)
        for topic in queries:
            print(topic)
            response = call_api(project_pk, conversation_pk, api_key, topic)
            response = response[7:-3]
            print(response)
            response = json.loads(response)
            data[topic] = response

    test_file_path = "/mnt/c/Users/liyufeim/risk intelligence/db.json" # TODO: Change this to the path of the file you want to write to

    with open(test_file_path, "w") as f:
        json.dump(data, f, indent=4)
    
    push_to_db(data)

if __name__ == '__main__':
    main()