"""

Author:    John Cleaver <cleaver.john.k@gmail.com>
Copyright: 2016 John Cleaver
License: See LICENSE file
"""

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')
