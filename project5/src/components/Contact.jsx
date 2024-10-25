import React from "react";

const Contact = () => {
  return (
    <div className="">
      <div className="w-[900px] h-[600px] bg-white mx-auto mt-[64px] rounded-[16px] shadow-lg">
        <div className="flex w-[720px] mx-auto h-16 border-black border-2 items-center gap-8">
          <div className="w-[540px]">
            <input placeholder="searching..." type="text" />
            <button className="h-16 bg-[#0061F2] w-[120px]">Bu</button>
          </div>
          <button>Create Contact</button>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Contact;
