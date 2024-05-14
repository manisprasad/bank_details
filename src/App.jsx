import React, { useState } from "react";
import "./index.css";
import fetchData from "./fetch.js";
import Result from "./Result"; // Import your Result component

const App = () => {
  const [ifscCode, setIfscCode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [center, setCenter] = useState("");
  const [branch, setBranch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "ifsc") {
      setIfscCode(value);
    } else if (name === "state") {
      setState(value);
    } else if (name === "district") {
      setDistrict(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "center") {
      setCenter(value);
    } else if (name === "branch") {
      setBranch(value);
    }
    // Add similar handling for other input fields if needed
  };

  const handleSearch = () => {
    if (ifscCode) {
      setBuffering(true);
      fetchData(ifscCode)
        .then((result) => {
          setData(result);
          setShowResult(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // Handle other search criteria here if needed
    }
    setBuffering(false);
  };

  return (
    <>
      <h1 className="w-screen glass py-2 text-2xl text-center font-bold max-h-max text-blue-600">Indian bank Info.</h1>
      <div className="user-input flex flex-col items-center p-2">
        <div className="ifsc">
          <p className="font-bold text-black-500 text-3xl">Enter IFSC code</p>
          <input
            className="border-2 rounded-md text-center border-black p-2"
            type="text"
            name="ifsc"
            value={ifscCode}
            onChange={handleInput}
            placeholder="IFSC code"
          />
        </div>
        {/* <div className="text-3xl">or</div> */}
        <div className="location flex flex-wrap gap-9 items-center justify-center">

{/* 
        <div>
            <p className="font-bold text-gray-500">Enter State Name</p>
            <input 
            value={state}
              className="border-2 rounded-md text-center border-black p-2" 
              type="text" 
              name="state" // Add name attribute
              onInput={handleInput} // Pass handleInput function correctly
              placeholder="Enter State" />
          </div>
          <div>
            <p className="font-bold text-gray-500">Enter district Name</p>
            <input 
            value={district}
              className="border-2 rounded-md text-center border-black p-2" 
              type="text" 
              name="district" // Add name attribute
              onInput={handleInput} // Pass handleInput function correctly
              placeholder="Enter district" />
          </div>

          <div>
            <p className="font-bold text-gray-500">Enter city Name</p>
            <input 
            value={city}
              className="border-2 rounded-md text-center border-black p-2" 
              type="text" 
              name="city" // Add name attribute
              onInput={handleInput} // Pass handleInput function correctly
              placeholder="Enter city" />
          </div>


          <div>
            <p className="font-bold text-gray-500">Enter center Name</p>
            <input 
            value={center}
              className="border-2 rounded-md text-center border-black p-2" 
              type="text" 
              name="center" // Add name attribute
              onInput={handleInput} // Pass handleInput function correctly
              placeholder="Enter center" />
          </div>

          <div>
            <p className="font-bold text-gray-500">Enter branch Name</p>
            <input 
            value={branch}
              className="border-2 rounded-md text-center border-black p-2" 
              type="text" 
              name="branch" // Add name attribute
              onInput={handleInput} // Pass handleInput function correctly
              placeholder="Enter branch" />
          </div> */}


          {/* Input fields for other criteria */}
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="mt-7 border-2 bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-500"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
      <div className="result-area">
      {buffering ? <h1 className='text-2xl text-center mt-5'>Loading...</h1> : null} 
        {showResult && <Result data={data} buffering={buffering} />} {/* Display Result component if showResult is true */}
      </div>
    </>
  );
};

export default App;
