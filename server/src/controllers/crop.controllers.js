// controllers/cropController.js
// src/controllers/crop.controllers.js
import Crop from '../models/crop.models.js';

export const addCrop = async (req, res) => {
  const { name, description, price, seller } = req.body;
  
  try {
    const newCrop = new Crop({ name, description, price, seller });
    await newCrop.save();
    res.status(201).json(newCrop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find().populate('seller', 'name');
    res.status(200).json(crops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};