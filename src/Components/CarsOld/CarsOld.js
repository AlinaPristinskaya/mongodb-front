import React, { useEffect, useState } from "react";
import api from "../../api";
import "./CarsOld.css"; // Подключаем стили

const CarsOld = ({ refresh }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [refresh]);

  const fetchCars = async () => {
    try {
      const response = await api.get("/cars/old");
      setCars(response.data);
    } catch (error) {
      console.error("Failed to fetch cars", error);
    }
  };

  return (
    <div className="cars-old-container">
      <h2>Cars Older Than 5 Years</h2>
      <ul className="cars-old-list">
        {cars.map((car) => (
          <li key={car._id}>
            {car.make} {car.model} ({car.color}) - {car.owner}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsOld;

