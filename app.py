from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy
from scraper import scrape_doctors

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

@app.route('/get-doctors', methods=['GET'])
def get_doctors():
    specialty = request.args.get('specialty')
    location = request.args.get('location')
    insurance_carrier = request.args.get('insurance_carrier')
    
    doctors_info = scrape_doctors(specialty, location, insurance_carrier)
    if doctors_info:
        return jsonify(doctors_info)
    else:
        return jsonify({"error": "No results"})
    
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)