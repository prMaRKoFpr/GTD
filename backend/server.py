from flask import *

app = Flask(__name__)


@app.route('/')
def index():
    resp = Response("YA lox")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


if __name__ == '__main__':
    app.run(port=8080, host='192.168.1.18')
