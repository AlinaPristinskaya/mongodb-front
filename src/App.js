import React, { useState } from "react";
import CarForm from "./Components/CarForm";
import CarList from "./Components/CarList";
import CarsOld from "./Components/CarsOld";
import Cars from "./Components/Cars";

function App() {
  const [carToEdit, setCarToEdit] = useState(null);
  // eslint-disable-next-line
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh); // toggle refresh state
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-4xl font-extrabold mb-8 text-indigo-600">
        Car Management System
      </h1>
     

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            {/* Car Form Section */}
            <CarForm
              carToEdit={carToEdit}
              setCarToEdit={setCarToEdit}
              refresh={triggerRefresh}
            />
          </div>
          
          <div className="lg:col-span-2">
            {/* Car List Section */}
            <CarList setCarToEdit={setCarToEdit} refresh={triggerRefresh} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            {/* Cars Older Than 5 Years Section */}
            <CarsOld refresh={triggerRefresh} />
          </div>
          <div>
            {/* All Cars Section */}
            <Cars refresh={triggerRefresh} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
