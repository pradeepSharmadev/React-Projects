import React, { useEffect, useState } from "react";
import { Hero, Items, logo } from "./index";
import styled from "styled-components";

export const BASE_URL = "http://localhost:5000";

const Application = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clickValue, setClickValue] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleValue = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(data);
    } else {
      const filterData = data.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredData(filterData);
    }
  };

  const functionCallClick = (val) => {
    setClickValue(val);
    if (clickValue === "all") {
      setFilteredData(data);
      setClickValue(val)
      return;
    } else {
      const filterData = data.filter((item) => {
        return item.type.toLowerCase().includes(clickValue.toLowerCase());
      });
      setFilteredData(filterData);
      setClickValue(val)
    }
  };
  return (
    <>
      <Container>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <input
              onChange={handleValue}
              type="text"
              placeholder="Search Foods..."
            />
          </div>
          <div className="login">
            <button className="btn">Log-In</button>
          </div>
        </div>
      </Container>
      <Hero handleClick={functionCallClick} />
      <Items data={filteredData} />
    </>
  );
};

export default Application;

const Container = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.25);
  .navbar {
    height: 120px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logo img {
    width: 250px;
  }
  .search input {
    all: unset;
    width: 362px;
    height: 48px;
    border: 2px solid #3ba935;
    border-radius: 8px;
    text-align: left;
    padding-left: 20px;
    font-size: 18px;
    color: #333333;
    background-color: transparent;
  }
  .login button {
    height: 48px;
    width: 160px;
    background-color: #e94d20;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;
