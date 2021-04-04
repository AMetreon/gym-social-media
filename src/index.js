import React from "react"
import ReactDOM from "react-dom"
import {
  Route,
  Link,
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom"
import "./index.css"
import App from "./App"
import Profile from "./Profile"
import Market from "./Market"
import reportWebVitals from "./reportWebVitals"

const routs = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={Profile} />
      <Route path="/market" component={Market} />
    </div>
  </BrowserRouter>
)
ReactDOM.render(routs, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
