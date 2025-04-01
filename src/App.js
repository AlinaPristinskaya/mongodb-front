import "./App.css";
import CarForm from "./Components/CarForm/CarForm";
import CarList from "./Components/CarList/CarList";
import CarsOld from "./Components/CarsOld/CarsOld";
import Cars from "./Components/Cars/Cars";
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
      <h1>Car Management System</h1>
      <div className="app-sections">
        <div>
          <CarForm
            carToEdit={carToEdit}
            setCarToEdit={setCarToEdit}
            refresh={triggerRefresh}
          />
        </div>
        <div>
          <CarList setCarToEdit={setCarToEdit} refresh={triggerRefresh} />
        </div>
        <div>
          <CarsOld refresh={triggerRefresh} />
        </div>
        <div>
          <Cars refresh={triggerRefresh} />
        </div>
      </div>
    </div>
  );
}

export default App;


