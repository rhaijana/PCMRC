const bcrypt = require("bcrypt");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    console.log("Incoming registration request:", req.body);

    const { fullName, email, phone, address, type, organization, password } = req.body;

    // Validation: Check if all required fields are provided
    if (!fullName || !email || !phone || !address || !type || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // If the type is not 'Other', organization is required
    if ((type === 'School' || type === 'Company' || type === 'Organization') && !organization) {
      return res.status(400).json({ message: "Organization is required for this type" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save it to the database
    const newUser = new User({
      fullName,
      email,
      phone,
      address,
      type,
      organization: organization || null,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser };
