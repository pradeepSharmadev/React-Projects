import React, { useState } from "react";
import { styled } from "styled-components";
import { Button } from "./index.js";
import { IoIosHome } from "react-icons/io";
import {Link} from "react-router-dom"


const Gameboard = () => {
  const numArr = [1, 2, 3, 4, 5, 6];

  const [selectedVal, setSelectedVal] = useState(null);
  const [diceRoll, setDiceRoll] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [errMassage, setErrMassage] = useState("");

  const setValue = (val) => {
    setSelectedVal(val);
    setErrMassage("");
  };
  const getRandomArbitrary = () => {
    if (selectedVal !== null) {
      setErrMassage("");
      setDiceRoll(Math.floor(Math.random() * (7 - 1) + 1));
      if (selectedVal === diceRoll) {
        setTotalScore(totalScore + selectedVal);
        setSelectedVal(null);
      } else {
        setTotalScore(totalScore - 1);
        setSelectedVal(null);
      }
    } else {
      setErrMassage("Please select Any of the Dice Number.");
    }
  };

  const handleRestart = () => {
    setSelectedVal(null);
    setTotalScore(0);
    setErrMassage("");
  };

  return (
    <>
      <Link to="/">
        <Navigate className="navigate">
          <IoIosHome />
          <div className="back">Back</div>
        </Navigate>
      </Link>

      <Main>
        <div className="scoreSelect">
          <div className="score">
            <span>{totalScore}</span>
            <div>Total Score</div>
          </div>
          <div className="right">
            <div className="selection">
              {numArr.map((val, ind) => {
                return (
                  <Box
                    isSelected={val === selectedVal}
                    onClick={() => setValue(val)}
                    key={ind}
                  >
                    {val}
                  </Box>
                );
              })}
            </div>
            <p>{errMassage}</p>
            <h3>Select a number to roll the dice</h3>
          </div>
        </div>
      </Main>
      <Play>
        <div className="diceRoll">
          <div onClick={getRandomArbitrary} className="img">
            <img src={`images/dice_${diceRoll}.png`} alt="Dice" />
          </div>
          <div className="massage">Click to Roll the Dice</div>
        </div>
        <div className="btn">
          <div onClick={getRandomArbitrary}>
            <Button text="Roll Dice" />
          </div>
          <div onClick={handleRestart}>
            <Button text="Restart" />
          </div>
        </div>
      </Play>
    </>
  );
};

export default Gameboard;

const Navigate = styled.div`
  display: flex;
  font-size: large;
  margin: 0;
  padding: 0;
  color: #000081e3;
  margin-left: 40px;
  padding-top: 10px;
  `

const Main = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  .scoreSelect {
    display: flex;
    margin-top: 56px;
    justify-content: space-between;
  }
  .right {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  p {
    font-size: 18px;
    color: red;
    padding: 4px;
    margin: 0;
    margin-top: 12px;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  .score {
    height: 180px;
    width: 150px;
    border: 3px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .score span {
    font-size: 100px;
    font-weight: 600;
  }
  .score div {
    font-size: 20px;
    font-weight: 600;
  }
  .selection {
    display: flex;
    gap: 16px;
  }
`;

const Play = styled.div`
  display: flex;
  max-width: 1280px;
  flex-direction: column;
  margin: 0 auto;

  .diceRoll {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    margin-top: -18px;
  }
  .img {
    height: 250px;
    width: 250px;
  }
  .img img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }
  .massage {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 500;
  }
  .btn {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 24px;
  }
  .btn .Roll {
    background-color: white;
    color: black;
  }
`;

const Box = styled.div`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  transition: background-color 0.3s ease;
  height: 76px;
  width: 73px;
  border: 3px solid #000;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 32px;
  font-weight: 600;
`;

// return (
//   <Main>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("1")}
//     >
//       <div>1</div>
//     </div>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("2")}
//     >
//       <div>2</div>
//     </div>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("3")}
//     >
//       <div>3</div>
//     </div>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("4")}
//     >
//       <div>4</div>
//     </div>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("5")}
//     >
//       <div>5</div>
//     </div>
//     <div
//       className="cell"
//       tabIndex="0"
//       Roll="button"
//       onClick={() => console.log("6")}
//     >
//       <div>6</div>
//     </div>
//   </Main>
// );

// const Main = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 10px;
//   background-color: #ffffff;
//   padding: 12px;
//   border-radius: 5px;
//   font-size: 24px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
//   justify-items: center;
//   align-items: center;
//   text-align: center;
//   transition: background-color 0.3s ease-in-out;

//   :hover {
//     transition: background-color 0.3s ease-in-out;
//     background-color: #e67070;
//   }

//   .cell {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     background-color: transparent;
//     cursor: pointer;
//   }

//   .cell:hover {
//     background-color: #ccc;
//   }

//   .cell:focus {
//     outline:none;
//   }

//   .cell.active {
//     background-color: #007bff;
//     color: white;
//   }

//   @media screen and (max-width: 600px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   `
