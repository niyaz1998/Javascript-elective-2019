import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from "axios";

/// API is not ready yet
/// so I implemented small python (flask) server
/// class LogIn(Resource):
//     def post(self):
//         data = request.get_json()
//         if data.get('name') == 'name' and data.get('password') == '123':
//             return {"answer": "correct password"}, 200
//         else:
//             return {"answer": "incorrect password"}, 200

/// I tested it, works


axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://10.242.1.247:5000'; // my IP

ReactDOM.render(
    <App/>,
    document.getElementById("root"));