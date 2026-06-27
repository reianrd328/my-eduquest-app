from flask import Flask, jsonify, render_template

app = Flask(__name__)

DATABASE = {
    "1": [{"q": "What is 1 + 1?", "options": ["1", "2", "3"], "answer": 1}],
    "6": [{"q": "What is the square root of 64?", "options": ["6", "7", "8", "9"], "answer": 2}]
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/questions/<grade_id>')
def get_questions(grade_id):
    questions = DATABASE.get(str(grade_id), [])
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True, port=5000)