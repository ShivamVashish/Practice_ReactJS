import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";
function App() {
  return (
    <div>
      <Header />
      {arr.map((value, index) => (
        <Card key={index} cloth={value.cloth} Offer={value.Offer} />
      ))}
      <Footer/>
    </div>
  );
}

const Root = ReactDOM.createRoot(document.querySelector("#root"));
Root.render(<App />);
