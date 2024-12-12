import React from "react";
import { useState } from "react";
import "./App.css";
import Unit from "./Components/Admin/addBus.js";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [bNumber, setBNumber] = useState("");
  const [bRoute, setBRoute] = useState("");
  const [bName, setBName] = useState("");
  const [bModel, setBModel] = useState("");
  const [bCapacity, setBCapacity] = useState("");

  const [mydata, setMydata] = useState([]);
  

  return (
    <div className="main__container">
      <div className="main_left">
        <div>
          <h1>Add Bus details</h1>
        </div>
        <input
          type="text"
          placeholder="Enter Bus Image URL"
          value={imageUrl}
          onChange={(e) => {
            e.preventDefault();
            setImageUrl(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Bus Number"
          value={bNumber}
          onChange={(e) => {
            e.preventDefault();
            setBNumber(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Bus Route"
          value={bRoute}
          onChange={(e) => {
            e.preventDefault();
            setBRoute(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Bus Name"
          value={bName}
          onChange={(e) => {
            e.preventDefault();
            setBName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Bus Model"
          value={bModel}
          onChange={(e) => {
            e.preventDefault();
            setBModel(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Bus Capacity"
          value={bCapacity}
          onChange={(e) => {
            e.preventDefault();
            setBCapacity(e.target.value);
          }}
        />
        <button onClick={() => {
          setMydata((pre) => [
            ...pre,
            {
              imageUrl,
              bNumber,
              bRoute,
              bName,
              bModel,
              bCapacity,
            },
          ]);
          setImageUrl((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          setBNumber((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          setBRoute((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          setBName((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          setBModel((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          setBCapacity((pre) => {
            if (pre.length > 0) {
              return "";
            } else {
              return pre;
            }
          });
          
        }}>Add Bus</button>
      </div>
      <div className="main_right">
        {mydata?.map(
          ({ imageUrl, bNumber, bRoute, bName, bModel, bCapacity }) => (
            <Unit 
            key={bNumber}
            imageUrl={imageUrl}
            bNumber={bNumber}
            bRoute={bRoute}
            bName={bName}
            bModel={bModel}
            bCapacity={bCapacity}
            
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
