from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/v1/resume', methods=['GET'])
def get_resume():
    return send_from_directory('documents', 'Batulan-Ayan_Resume.pdf', as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True, port=5000)