import React from 'react'
import "../Form/Form.modules.css"
import Button from '../Button/Button';

const Form = () => {
  return (
    <div className="top">
      <div className="end">
        <div>
          <div className="form">
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
              <textarea rows={5} type="text" name="massage" />
              <label className="width-third" htmlFor="massage">
                Enter - Massage
              </label>
            </div>
          </div>
          <div className="submit-btn">
            <Button text="Submit" />
          </div>

          <div className="methods">
            <Button text="Email" />
            <Button text="SMS-Massage" />
            <Button text="Phone call" />
          </div>
        </div>
        <div className="image">
          <img src="images/illustration.png" alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Form