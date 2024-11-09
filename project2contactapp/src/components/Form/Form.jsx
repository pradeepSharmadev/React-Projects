import React, { useState } from "react";
import "../Form/Form.modules.css";
import Button from "../Button/Button";

const Form = () => {
  const [name, setName] = useState(null);
  const [eamil, setEmail] = useState(null);
  const [massage, setMassage] = useState(null);
  // const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMassage(event.target[2].value);

    alert(`Name: ${name} \n Email-Id: ${eamil} \n Massage: ${massage}`)
  };

  const handleClick = () => {
    // let userConf = confirm(
    //   `Name: ${name} \n Email-Id: ${eamil} \n Massage: ${massage}`
    // );
    // setShowAlert(userConf);
    // if (showAlert) {
    //   alert(`Thank You ${name}!`);
    // }
  };
  return (
    <div className="top">
      <div className="end">
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div className="input1">
              <input type="text" name="name" />
              <label className="width-first" htmlFor="name">
                Name
              </label>
            </div>
            <div className="input1 widthfix">
              <input className="label2" type="email" name="email" />
              <label className="width-second" htmlFor="email">
                Email - ID
              </label>
            </div>
            <div className="input1">
              <textarea className="input1" rows={5} type="text" name="massage" />
              <label className="width-third" htmlFor="massage">
                Enter - Massage
              </label>
            </div>
            <Button text="Submit" />
          </form>

          <div className="methods">
            <a href="#" className="active">
              Email
            </a>
            <a href="#">Message</a>
            <a href="#">Phone Call</a>
          </div>
        </div>
        <div className="image">
          <img src="images/illustration.png" alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Form;
