import React, { useState, useEffect } from "react";
import api from "../api";

const CarForm = ({ carToEdit, setCarToEdit, refresh }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    registration_number: "",
    owner: "",
    color: "",
    address: "",
  });

  useEffect(() => {
    if (carToEdit) {
      setFormData({
        make: carToEdit.make,
        model: carToEdit.model,
        color: carToEdit.color,
        registration_number: carToEdit.registration_number,
        owner: carToEdit.owner,
        address: carToEdit.address,
      });
    }
  }, [carToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (carToEdit) {
        await api.put(`/cars/${carToEdit._id}`, formData);
      } else {
        await api.post("/cars/add", formData);
      }

      setFormData({
        make: "",
        model: "",
        color: "",
        registration_number: "",
        owner: "",
        address: "",
      });
      refresh();
      setCarToEdit(null);
    } catch (error) {
      console.error("Failed to submit form", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {carToEdit ? "Edit Car" : "Add a Car"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            placeholder="Make"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Model"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            placeholder="Color"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
            placeholder="Registration Number"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Owner"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          {carToEdit ? "Update Car" : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default CarForm;
