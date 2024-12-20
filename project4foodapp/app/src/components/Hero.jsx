import React from 'react'
import { styled } from 'styled-components';
import { background } from './index';

const Herocard = ({handleClick}) => {

  const buttonData= [{
    id:1,
    name:"All",
    value:"all"
  },
  {
    id:2,
    name:"Breakfast",
    value:"breakfast"
  },
  {
    id:3,
    name:"Lunch",
    value:"lunch"
  }
  ,
  {
    id:4,
    name:"Dinner",
    value:"dinner"
  }
]
  return (
    <Container>
      <div className="back"></div>
      <div className="front">
        <div className="heading">
          <div className="subhead">Satisfy Your Cravings with</div>
          <div className="head">Delicious Fast Food!</div>
        </div>
        <div className="subtitle">
          Fresh ingredients, fast service, and flavors you'll love. Experience
          the taste of quality fast food crafted just for you!
        </div>
        <div className="filters">
          {buttonData.map((val)=>{
            return (
              <button key={val.id}
                value={val.value}
                className="btn"
                onClick={(e) => {
                  handleClick(e.target.value);
                }}
              >
                {val.name}
              </button>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Herocard

const Container = styled.div`
  /* .img{
    height: 350px;
    width: 100%;
    object-fit: cover;
  } */
  .back {
    width: 100%;
    height: 320px;
    position: absolute;
    background-image: url(${background});
    background-size: cover;
  }
  .front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 720px;
    height: 320px;
    margin: 0 auto;
    background-color: #cfffcf;
    position: relative;
    top: 100px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(16px);
  }
  .heading{
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .subhead{
    font-size: 24px;
    font-weight:500;
    color: black;
  }
  .head{
    font-size: 64px;
    font-weight: 600;
    color: black;
    line-height: 56px;
    text-transform: capitalize;
  }
  .subtitle{
    font-size: 14px;
    color:#000000;
    font-weight: 400;
    width: 440px;
    text-align: center;
    margin-top: 24px;

  }
  .filters{
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 64px;
  }
  .filters .btn {
    height: 32px;
    width: 120px;
    background-color: #e94d20;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

`;