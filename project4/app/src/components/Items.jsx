import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { background } from "./index";

const Items = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}`);
        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(`Error while fetching data from server Error: ${err}`);
      }
    };
    fetchData();
  }, []);

  // console.log(`${data} data coming from server`)
  if (error) {
    return <div>error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  // console.log(data)
  console.log(BASE_URL)

  return (
    <Container>
      <div className="main">
        {data.map((val) => {
          return (
            <div className="item" key={val.name}>
              <img
                className="img"
                src={`${BASE_URL}${val.img}`}
                alt="img"
              />
              <div className="content">
                <div className="heading">
                  <h2>{val.name}</h2>
                </div>
                <div className="subheading">{val.text}</div>
                <div className="call-to">
                  <button className="btn">Order Now</button>
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
      margin-bottom: 4px;
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
