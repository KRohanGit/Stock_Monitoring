const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const User = require("../model/UserModel");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

// Test endpoint to check if users are being saved (remove in production)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password from response
    res.json({ 
      count: users.length, 
      users: users.map(user => ({
        id: user._id,
        email: user.email,
        username: user.username,
        age: user.age,
        createdAt: user.createdAt
      }))
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
