# Initialize Flask
from flask import Flask
app = Flask(__name__)

# Import routes
from app import routes

# Run the application
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')