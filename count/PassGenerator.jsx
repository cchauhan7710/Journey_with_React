import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function PassGenerator() {
  //useState
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("flase");
  const [character, setCharacter] = useState("false");
  const [length, setLength] = useState(8);

  //useRef
  const passwordref = useRef(null);
//useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "~!@#$%^&*()_+{}<>?";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [number, character, length, setPassword]);

//useCallback
  const copyPaste = useCallback(() => {
    passwordref.current.select()// used to show the text is selected or not
    passwordref.current.setSelectionRange( 0,5) // used  for selection range 
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, character, number, passwordGenerator]);

  return (
    <>
      <div
        className="w-full  max-w-md mx-auto my-8 px-4 py-8  shadow-md rounded-lg
bg-gray-700 text-orange"
      >
        <h1 className="text-4xl text-white text-center py-4">
          Password Generator
        </h1>
        <div className="flex rounded-lg shadow overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white "
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPaste} className="bg-green-600 py-2 px-3">
            Copy
          </button>
        </div>
        <div className="flex  text-sm gap-x-2">
          <div className=" flex  item-center gap-x-1">
            <input
              type="range"
              min={5}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length : {length}</label>
          </div>
          <div className="flex  item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="number"
              onChange={() => setNumber((prevNum) => !prevNum)}
            />
            <label className="text-white">Numbers</label>
          </div>
          <div className="flex  item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="character"
              onChange={() => {
                setCharacter((prevChhar) => !prevChhar);
              }}
            />
            <label className="text-white"> Symbols </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassGenerator;
{
  /* <div className="  flex items-center justify-center  w-full h-screen bg-black">
      <div class="w-5xl h-35 flex  bg-gray-200 px-15 py-3 items-center justify-center rounded-3xl ">
        <input
          type="text"
          value={password}
          readOnly
          className="outline-none px-3  w-4xl  bg-gray-700 rounded-l-3xl py-4 gap "
          placeholder="Password "
        />
        
        <button className="py-4 px-4  bg-green-600 rounded-r-3xl">Copy</button>
        <div className=" text-sm gap-x-2 ">
        <div className="  items-center gap-x-1">
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{  setLength((e.target.value))}
            }
          />
          <lable className="text-black">Length:{length}</lable>
        </div>
      </div>
      </div>
      <div className=" text-sm gap-x-2 ">
        <div className="  items-center gap-x-1">
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{  setLength((e.target.value))}
            } 
          />
          <lable className="text-white">Length:{length}</lable>
        </div>
      </div>
    </div> */
}
