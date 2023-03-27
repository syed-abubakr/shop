import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import Grid from "./components/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/shop";
import { Details } from "./components/Details";

function App() {
  const [detail, setdetail] = useState(
    {
      id: 44,
      title: "Refined Wooden Shirt",
      price: 565,
      description: "0000",
      images:[
        "https://api.lorem.space/image/fashion?w=640&h=480&r=1619"
      ]
    }
  )
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop detail={detail} setdetail = {setdetail}/>} />
        <Route path="/details" element={<Details detail={detail} setdetail={setdetail} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
