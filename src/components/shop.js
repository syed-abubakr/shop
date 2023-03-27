import React from "react";
import { useState, useEffect } from "react";
// import { Grid } from "@mui/material";
import Grid from "./Grid";
import Header from "./Header";

export default function Shop({setdetail}) {
  const [Data, setData] = useState([
    {
      id: 44,
      title: "Refined Wooden Shirt",
      price: 565,
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=1619",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=8294",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=9782",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6537",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
    {
      id: 83,
      title: "Electronic Steel Shirt",
      price: 819,
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      images: [
        "https://api.lorem.space/image?w=640&h=480&r=1685",
        "https://api.lorem.space/image?w=640&h=480&r=8293",
        "https://api.lorem.space/image?w=640&h=480&r=3217",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 5,
        name: "Others",
        image: "https://api.lorem.space/image?w=640&h=480&r=971",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
    {
      id: 88,
      title: "Sleek Fresh Shirt",
      price: 941,
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      images: [
        "https://api.lorem.space/image/watch?w=640&h=480&r=2949",
        "https://api.lorem.space/image/watch?w=640&h=480&r=9019",
        "https://api.lorem.space/image/watch?w=640&h=480&r=2144",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 2,
        name: "Electronics",
        image: "https://api.lorem.space/image/watch?w=640&h=480&r=4625",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
    {
      id: 106,
      title: "Awesome Concrete Shirt",
      price: 103,
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      images: [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=1828",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=5057",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=3413",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://api.lorem.space/image/furniture?w=640&h=480&r=514",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
    {
      id: 107,
      title: "Electronic Fresh Shirt",
      price: 604,
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      images: [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=7472",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4300",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=1810",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 1,
        name: "Clothes",
        image: "https://api.lorem.space/image/fashion?w=640&h=480&r=6537",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
    {
      id: 142,
      title: "Modern Soft Shirt",
      price: 744,
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      images: [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=8358",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=833",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=1659",
      ],
      creationAt: "2023-03-27T06:34:26.000Z",
      updatedAt: "2023-03-27T06:34:26.000Z",
      category: {
        id: 3,
        name: "Furniture",
        image: "https://api.lorem.space/image/furniture?w=640&h=480&r=514",
        creationAt: "2023-03-27T06:34:26.000Z",
        updatedAt: "2023-03-27T06:34:26.000Z",
      },
    },
  ]);

  const [FilteredData, setFilteredData] = useState(Data)

  let D = [];

  const fetchData = async () => {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products/?title=shirt"
    );
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    // D = await data
    return data;
  };
  useEffect(() => {
    // setData(fetchData());
    // console.log(Data);
  }, []);

  return (
    <div className="shop">
      <Header Data={Data} setFilteredData={setFilteredData}/>
      {console.log(Data[0]["title"])}
      <Grid data={FilteredData} setdetail = {setdetail}/>
    </div>
  );
}
