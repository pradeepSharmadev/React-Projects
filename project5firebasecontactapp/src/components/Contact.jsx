import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Contact.css"

const Contact = () => {
  return (
    <div className="">
      <div className="w-[900px] h-[456px] pt-[32px] bg-white mx-auto mt-[32px] shadow-lg">
        <div className="flex w-[720px] mx-auto h-16 items-center justify-between ">
          <div className="w-[540px] flex outline outline-[rgba(21,21,21,0.3)] rounded-[12px]">
            <input
              className="text-lg text-black pl-7 w-full focus:outline-none"
              placeholder="searching..."
              type="text"
            />
            <button className="h-[60px] bg-[#0061F2] w-[160px] rounded-r-[12px] flex items-center justify-center text-[20px] text-white border-0">
              <FaSearch />
            </button>
          </div>
          <button className="font-medium text-[18px] text-white w-[160px] h-[60px] border border-[#B2B2B2] bg-[#0061f2] rounded-lg">
            New Contact
          </button>
        </div>
        <div className="cards-slider border-gray-300 h-[340px] w-[720px] mx-auto mt-5 border-x-4 grid grid-cols-2 overflow-y-scroll scroll-p-0 px-5 gap-x-6 gap-y-4  border-t-4 rounded-t-md pt-4">
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div class="card p-6 max-x-sm mx-auto bg-white rounded-xl shadow-md flex items-center gap-x-4">
              <div className="shrink-0">
                <img
                  className="size-12"
                  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_1280.jpg"
                  alt="ChitChat Logo"
                />
              </div>
              <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
