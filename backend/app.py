from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

breadcrumbs = []

@app.route("/health")
def health():
    return {"status": "ok"}

@app.route("/add", methods=["POST"])
def add_breadcrumb():
    breadcrumbs.append(request.json)
    return {"message": "added"}

@app.route("/path")
def get_path():
    return jsonify(breadcrumbs)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
