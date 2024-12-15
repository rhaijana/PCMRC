const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema({
  facility_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  availability: { type: String, required: true },
  equipment: { type: [String], required: true },
});

module.exports = mongoose.model("Facility", FacilitySchema);
