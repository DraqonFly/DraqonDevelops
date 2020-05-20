import 'foundation-sites/dist/css/foundation.min.css';
require('foundation-sites');
require.context('../svg', true, /\.svg$/);
import "../scss/index.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../react/components/App";
ReactDOM.render(<App />, document.getElementById("root"))