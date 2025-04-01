import React, { useState, useEffect } from "react";
import api from "../../api";
import "./Cars.css"; // Подключаем стили

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
    <div className="cars-container">
      <h2>Update multiple cars</h2>
      <button onClick={handleBulkUpdate}>Update Selected</button>
      <ul className="cars-list">
        {cars.map((car) => (
          <li key={car._id}>
            <div className="car-header">
              <input
                type="checkbox"
                checked={!!selectedCars[car._id]}
                onChange={() => handleSelectCar(car._id)}
              />
              <span>
                {car.make} {car.model} - {car.owner}
              </span>
            </div>
            {selectedCars[car._id] && (
              <div className="car-fields">
                <input
                  type="text"
                  placeholder="Make"
                  value={formValues[car._id]?.make || car.make}
                  onChange={(e) =>
                    handleInputChange(car._id, "make", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Model"
                  value={formValues[car._id]?.model || car.model}
                  onChange={(e) =>
                    handleInputChange(car._id, "model", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Owner"
                  value={formValues[car._id]?.owner || car.owner}
                  onChange={(e) =>
                    handleInputChange(car._id, "owner", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Color"
                  value={formValues[car._id]?.color || car.color}
                  onChange={(e) =>
                    handleInputChange(car._id, "color", e.target.value)
                  }
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
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formValues[car._id]?.address || car.address}
                  onChange={(e) =>
                    handleInputChange(car._id, "address", e.target.value)
                  }
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
