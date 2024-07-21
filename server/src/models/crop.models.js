// import mongoose from "mongoose";
// const cropSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     quantity: { type: Number, required: true },
//     farmer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     image: { type: String, required: true },

// },{timestamps:true});

// const Crop = mongoose.model('Crop', cropSchema);

// module.exports = { Crop };
// src/models/crop.models.js
import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;