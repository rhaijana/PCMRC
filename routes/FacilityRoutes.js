/*const express = require("express");
const Facility = require("../models/Facility");
const router = express.Router();

// Get all facilities
router.get("/", async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.status(200).json(facilities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching facilities", error });
  }
});

// Get a facility by ID
router.get("/:id", async (req, res) => {
  try {
    const facility = await Facility.findOne({ facility_id: req.params.id });
    if (!facility) return res.status(404).json({ message: "Facility not found" });
    res.status(200).json(facility);
  } catch (error) {
    res.status(500).json({ message: "Error fetching facility", error });
  }
});

// Add a new facility
router.post("/", async (req, res) => {
  const { facility_id, name, type, capacity, availability, equipment } = req.body;
  try {
    const newFacility = new Facility({ facility_id, name, type, capacity, availability, equipment });
    await newFacility.save();
    res.status(201).json(newFacility);
  } catch (error) {
    res.status(400).json({ message: "Error creating facility", error });
  }
});

// Update a facility
router.put("/:id", async (req, res) => {
  try {
    const updatedFacility = await Facility.findOneAndUpdate(
      { facility_id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedFacility) return res.status(404).json({ message: "Facility not found" });
    res.status(200).json(updatedFacility);
  } catch (error) {
    res.status(400).json({ message: "Error updating facility", error });
  }
});

// Delete a facility
router.delete("/:id", async (req, res) => {
  try {
    const deletedFacility = await Facility.findOneAndDelete({ facility_id: req.params.id });
    if (!deletedFacility) return res.status(404).json({ message: "Facility not found" });
    res.status(200).json({ message: "Facility deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting facility", error });
  }
});

module.exports = router;
*/