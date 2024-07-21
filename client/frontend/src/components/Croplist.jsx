// src/components/CropList.jsx
import  { useEffect, useState } from 'react';
import axios from 'axios';

const CropList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/crops');
        setCrops(res.data);
      } catch (err) {
        alert('Error: ' + err.message);
      }
    };
    fetchCrops();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Crops</h2>
      <ul>
        {crops.map(crop => (
          <li key={crop._id} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">{crop.name}</h3>
            <p>{crop.description}</p>
            <p>Price: ${crop.price}</p>
            <p>Quantity: {crop.quantity}</p>
            <p>Farmer: {crop.farmer.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropList;