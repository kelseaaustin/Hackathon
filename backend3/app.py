from flask import Flask, render_template, jsonify, request
import pymongo
from bson import json_util

app = Flask(__name__)

# Replace with your MongoDB connection string
mongo_uri = "mongodb+srv://slay123:csturdy123@cluster0.wgby6ob.mongodb.net/?retryWrites=true&w=majority"

# Create a MongoClient
client = pymongo.MongoClient(mongo_uri)

# Access the database
db = client.get_database("shefundsit")

# Access the "data" collection
data_collection = db["data"]

@app.route('/')
def display_data():
    # Query documents in the "data" collection
    query = {"name": "John Doe"}  # Example query by name
    results = data_collection.find(query)

    all_data = list(data_collection.find({}))

    # Render a template with the retrieved data
    return render_template('index.html', data=all_data)

@app.route('/api/data')
def get_all_data():
    # Fetch all documents in the "data" collection
    all_data = list(data_collection.find({}))

    # Convert ObjectId to strings using json_util
    serialized_data = json_util.dumps(all_data, default=str)

    return serialized_data

@app.route('/api/signup', methods=['POST'])
def signup():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    name = ""
    age = ""
    credit_score = ""
    assessment_score = ""
    savings = ""
    income = ""
    education_level = ""
    employment_status = ""
    marital_status = ""
    
    user_data = {
            'username': username,
            'email': email,
            'password': password,
            'name': name,
            'age': age,
            'credit_score': credit_score,
            'assessment_score': assessment_score,
            'savings': savings,
            'income': income,
            'education_level': education_level,
            'employement_status': employment_status,
            'marital_status': marital_status
        } # Assuming the client sends data in JSON format

    # Insert the user data into the database (adjust the collection name as needed)
    result = data_collection.insert_one(user_data)

    if result.inserted_id:
        return jsonify(message='User signed up successfully'), 201
    else:
        return jsonify(message='User sign-up failed'), 400

if __name__ == '__main__':
    app.run(debug=True)