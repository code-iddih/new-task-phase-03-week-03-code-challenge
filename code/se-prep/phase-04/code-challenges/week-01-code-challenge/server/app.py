#!/usr/bin/env python3

from flask import Flask, make_response, jsonify
from flask_migrate import Migrate

from models import db, Hero, Power, HeroPower  

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///heroes.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False  

migrate = Migrate(app, db)

db.init_app(app)

































if __name__ == '__main__':
    app.run(port=5555, debug=True)