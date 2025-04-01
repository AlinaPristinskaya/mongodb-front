import React, { useEffect, useState } from "react";
import api from "../../api";
import "./CarList.css"; // Подключаем стили

const CarList = ({ setCarToEdit, refresh }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [refresh]);

  const fetchCars = async () => {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Failed to fetch cars", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await api.delete(`/cars/${id}`);
      refresh();
    } catch (error) {
      console.error("Failed to delete car", error);
    }
  };

  return (
    <div className="car-list">
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <span>{car.make} {car.model} ({car.color}) - {car.owner}</span>
            <div>
              <button onClick={() => setCarToEdit(car)}>Edit</button>
              <button onClick={() => deleteCar(car._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
