import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { background } from "./index";

const Items = () => {
const [data, setData] = useState(null)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
  
  const BASE_URL = "http://localhost:5000";
  const objectArr = [
    {
      id: "1",
      img: background,
      title: "Delicious Food",
      description: "some text have to show off not this type of text show",
      price: 276,
    },
    {
      id: "1",
      img: background,
      title: "Delicious Food",
      description: "some text have to show off not this type of text show",
      price: 276,
    },
    {
      id: "1",
      img: background,
      title: "Delicious Food",
      description: "some text have to show off not this type of text show",
      price: 276,
    },
  ];

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/food`)
        const json = await response.json()
        console.log(js)

        setData(data)
        setLoading(false)
      }catch(err) {
        setError(true)
        console.log(`Error while fetching data from server Error: ${err}`) 
    }}

  },[])


  if (error){
    return <div>error</div>;
  }
  if (Loading){
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <div className="main">
        {objectArr.map((val, ind) => {
          return (
            <div className="item">
              <img className="img" src={val.img} alt="" />
              <div className="content">
                <div className="heading">
                  <h2>{val.title}</h2>
                </div>
                <div className="subheading">
                  {val.description}
                </div>
                <div className="call-to">
                  <button className="btn">Shop Now</button>
                  <div className="rupee">&#8377; {val.price}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Items;

const Container = styled.div`
  margin-top: 132px;
  .main {
    /* height: 80vh; */
    display: flex;
    justify-content: space-evenly;

    /* gap: 34px; */
    padding-left: 8px;
    padding-right: 8px;
    flex-wrap: wrap;
    overflow: hidden;
    max-width: 1280px;
    margin: 0 auto;
  }
  .item {
    width: 30%;
    display: flex;
    gap: 4px;
    align-items: center;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 34px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  }
  .img {
    height: 110px;
    width: 110px;
    object-fit: cover;
    border-radius: 4px;
    margin: 8px;
    margin-bottom: 6px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 8px;
    .heading {
      font-size: 18px;
      font-weight: 400;
    }
    .subheading {
      width: 88%;
      height: 36px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 12px;
      overflow-y: hidden;
    }
  }
  .call-to {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 88%;

    .btn {
      height: 28px;
      width: 100px;
      background-color: #e94d20;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    }
    .rupee {
      font-size: 18px;
      font-weight: 500;
      margin-right: 4px;
    }
  }
`;
