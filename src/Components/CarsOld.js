import React, { useEffect, useState } from "react";
import api from "../api";

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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Cars Older Than 5 Years
      </h2>
      <ul className="space-y-4">
        {cars.map((car) => (
          <li
            key={car._id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300"
          >
            <span className="text-lg font-medium">
              {car.make} {car.model} ({car.color}) - {car.owner}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsOld;
