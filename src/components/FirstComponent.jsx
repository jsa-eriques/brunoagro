import React from "react";
import rightarrow from '../assets2/rigth-arrow.png'
const FirstComponent = () => {
  const erikson = console.log("bodybuilder");

  return (
    <>
      <header className="border border-black w-full bg-slate-500 opacity-60 h-[92px] flex justify-around items-center">
        <div>
            <h1 className="text-lg font-bold">BRUNO ALVES</h1>
        </div>
        <div className="border border-black flex justify-evenly w-[35%]">
            <button className=" p-2 text-lg">Button1</button>
            <button className=" p-2 text-lg">Button2</button>
            <button className=" p-2 text-lg">Button3</button>
        </div>
        <div className="w-[200px] rounded-xl  border border-black flex justify-center">
            <button className="font-semibold p-2 text-lg border border-black">Button1</button>
            <img src={rightarrow} alt="" className="border border-black w-[7px] h-[7px]" />
        </div>
      </header>
    </>
  );
};

export default FirstComponent;
