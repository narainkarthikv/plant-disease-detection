from flask import Flask, render_template, request, send_file, jsonify
from roboflow import Roboflow
from flask_cors import CORS
import base64

rf = Roboflow(api_key="x3Kx6adOgmWJYfpLuKRU")
project = rf.workspace().project("plant-disease-detection-v2-2nclk")
model = project.version(1).model
app = Flask("Server Successfully started on port 4000")
CORS(app)

@app.route("/api", methods=["POST"])
def api():
    result = {}
    file = request.files["img"]
    file.save('download.jpg')
    model.predict("./download.jpg", confidence=50, overlap=30).save()
    reply = model.predict("./download.jpg", confidence=40, overlap=30).json()
    with open("./predictions.jpg", "rb") as img_file:
        encoded_image = base64.b64encode(img_file.read()).decode("utf-8")
    result['image'] = encoded_image
    with open('sample.txt', 'w') as file:
        file.write(encoded_image)
    result['prediction'] = reply
    print(result)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port='4000')