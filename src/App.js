import "./App.css";
import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarsOld from "./Components/CarsOld";
import Cars from "./Components/Cars";
import React, { useState } from "react";

function App() {
  const [carToEdit, setCarToEdit] = useState(null);
  // eslint-disable-next-line
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh); // toggle refresh state
  };

  return (
    <div className="app-container">
      <h1 className="text-center text-3xl font-bold py-6">
        Car Management System
      </h1>
      <div className="app-sections">
        <div className="top-section">
          <div className="form-section">
            <CarForm
              carToEdit={carToEdit}
              setCarToEdit={setCarToEdit}
              refresh={triggerRefresh}
            />
          </div>
          <div className="car-list-section">
            <CarList setCarToEdit={setCarToEdit} refresh={triggerRefresh} />
          </div>
        </div>
        <div className="bottom-sections">
          <div className="cars-old-section">
            <CarsOld refresh={triggerRefresh} />
          </div>
          <div className="cars-section">
            <Cars refresh={triggerRefresh} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
