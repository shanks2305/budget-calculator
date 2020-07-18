import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <div className=" App bg-dark text-white">
      <Header />
      <h1 className="display-4">Calculate your monthly budget here...</h1>
      <Body />
    </div>
  );
};

export default App;
