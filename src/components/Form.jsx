import React from "react";

const Form = ({ name, setName, gender, setGender, age, setAge, city, setCity, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded"
            required
        />
        <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2 border rounded"
            required
        />
        <input
            type="text"
            placeholder="Enter your City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded"
            required
        />
        <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 border rounded"
            required
        >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition transform hover:scale-105"
        >
            Find My Valentine ❤️
        </button>
    </form>
);

export default Form;
