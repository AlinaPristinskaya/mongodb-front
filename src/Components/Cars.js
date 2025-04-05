import React, { useState, useEffect } from "react";
import api from "../api";

const Cars = ({ refresh }) => {
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState({});
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    fetchCars();
  }, [refresh]);

  const fetchCars = async () => {
    const response = await api.get("/cars");
    setCars(response.data);
  };

  const handleSelectCar = (carId) => {
    setSelectedCars((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
  };

  const handleInputChange = (carId, field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [carId]: {
        ...prev[carId],
        [field]: value,
      },
    }));
  };

  const handleBulkUpdate = async () => {
    const updates = Object.keys(formValues).map((key) => ({
      id: key,
      data: formValues[key],
    }));
    await api.put("/cars/bulk-update", updates);
    console.log("Cars updated successfully");
    setSelectedCars({});
    refresh();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Update Multiple Cars
      </h2>
      <button
        onClick={handleBulkUpdate}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Update Selected
      </button>
      <ul className="space-y-4">
        {cars.map((car) => (
          <li
            key={car._id}
            className="flex flex-col p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={!!selectedCars[car._id]}
                  onChange={() => handleSelectCar(car._id)}
                  className="w-5 h-5 text-indigo-600"
                />
                <span className="text-lg font-medium">
                  {car.make} {car.model} - {car.owner}
                </span>
              </div>
            </div>
            {selectedCars[car._id] && (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Make"
                  value={formValues[car._id]?.make || car.make}
                  onChange={(e) =>
                    handleInputChange(car._id, "make", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Model"
                  value={formValues[car._id]?.model || car.model}
                  onChange={(e) =>
                    handleInputChange(car._id, "model", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Owner"
                  value={formValues[car._id]?.owner || car.owner}
                  onChange={(e) =>
                    handleInputChange(car._id, "owner", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Color"
                  value={formValues[car._id]?.color || car.color}
                  onChange={(e) =>
                    handleInputChange(car._id, "color", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Registration number"
                  value={
                    formValues[car._id]?.registration_number ||
                    car.registration_number
                  }
                  onChange={(e) =>
                    handleInputChange(
                      car._id,
                      "registration_number",
                      e.target.value
                    )
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formValues[car._id]?.address || car.address}
                  onChange={(e) =>
                    handleInputChange(car._id, "address", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
