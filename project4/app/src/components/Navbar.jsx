import React from 'react'
import { styled } from 'styled-components';
import { logo } from './index';

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Foods..." />
          </div>
          <div className="login">
            <button className="btn">Log-In</button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar

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
    height: 48px ;
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