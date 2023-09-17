from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pymongo
from bson import json_util

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


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
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username and password:
        # Query the database to check if the user exists and the password is correct
        user = data_collection.find_one({'username': username, 'password': password})
        
        if user:
            # User found and password is correct
            return jsonify(message='Login successful'), 200
        else:
            # User not found or password is incorrect
            return jsonify(message='Login failed: Invalid credentials'), 401
    else:
        return jsonify(message='Login failed: Username and password are required'), 400


    

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Extract values from the data dictionary
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
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
    print("Received Data:", username, email, password)  # Add this line to log received data
    if result.inserted_id:
        return jsonify(message='User signed up successfully'), 201
    else:
        return jsonify(message='User sign-up failed'), 400

from flask import Flask, request, jsonify

@app.route('/api/update-user', methods=['POST'])
       
def update_user():
    data = request.get_json()
    email = data.get('email')
    
    print(email)
    print(data)
    try:
         # Retrieve the hidden fields from the form data
        email = data.get('email')
        data = request.get_json()
        print(email)
        print(data)

        # Check if the user exists in the database
        existing_user_data = data_collection.find_one({'email': email})
        print(existing_user_data)

        if existing_user_data:
            # Merge the existing data with the new data from the form
            updated_data = {**existing_user_data, **data}

            # Update the user's data in the database
            result = data_collection.replace_one({'email': email}, updated_data)

            if result.modified_count > 0:
                return jsonify(message='User data updated successfully'), 200
            else:
                return jsonify(message='User data update failed: User not found'), 404
        else:
            return jsonify(message='User data update failed: User not found'), 404
    except Exception as e:
        return jsonify(message='User data update failed: ' + str(e)), 500

@app.route('/api/assessment-score', methods=['GET'])
def get_assessment_score():
    # Retrieve the assessment score from the database or wherever it's stored
    # Assuming you have a field for assessment_score in the user's document
    username = request.args.get('username')  # Get the username as a query parameter
    user_data = data_collection.find_one({'username': username})
    
    assessment_score = user_data.get('assessment_score', 0)  # Default to 0 if not found
    if user_data:
        return jsonify(assessment_score=assessment_score), 200

    

if __name__ == '__main__':
    app.run(debug=True)
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
    print("Received Data:", username, email, password)  # Add this line to log received data
    if result.inserted_id:
        return jsonify(message='User signed up successfully'), 201
    else:
        return jsonify(message='User sign-up failed'), 400

from flask import Flask, request, jsonify

@app.route('/api/update-user', methods=['POST'])
       
def update_user():
    data = request.get_json()
    email = data.get('email')
    
    print(email)
    print(data)
    try:
         # Retrieve the hidden fields from the form data
        email = data.get('email')
        data = request.get_json()
        print(email)
        print(data)

        # Check if the user exists in the database
        existing_user_data = data_collection.find_one({'email': email})
        print(existing_user_data)

        if existing_user_data:
            # Merge the existing data with the new data from the form
            updated_data = {**existing_user_data, **data}

            # Update the user's data in the database
            result = data_collection.replace_one({'email': email}, updated_data)

            if result.modified_count > 0:
                return jsonify(message='User data updated successfully'), 200
            else:
                return jsonify(message='User data update failed: User not found'), 404
        else:
            return jsonify(message='User data update failed: User not found'), 404
    except Exception as e:
        return jsonify(message='User data update failed: ' + str(e)), 500


    
    

if __name__ == '__main__':
    app.run(debug=True)
