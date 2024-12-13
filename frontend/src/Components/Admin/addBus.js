import React from 'react';

const AddBus = ({ imageUrl, bNumber, bRoute, bName, bModel, bCapacity }) => {
  return (
    <div className="unit__container">
      <img
        src={imageUrl}
        alt='images'
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <h3>{bNumber}</h3>
      <p>
        <span>{bRoute}</span>
        <span>{bName}</span>
        <span>{bModel}</span>
        <span>{bCapacity}</span>
      </p>
    </div>
  );
};

export default AddBus;