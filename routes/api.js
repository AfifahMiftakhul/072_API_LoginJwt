const express = require("express");
const router = express.Router();

const komikController = require("../controllers/komikController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

// Public
router.get("/komik", komikController.getAllKomik);
router.get("/komik/:id", komikController.getKomikById);

// Protected
router.post("/komik", authMiddleware, komikController.createKomik);
router.put("/komik/:id", authMiddleware, komikController.updateKomik);
router.delete("/komik/:id", authMiddleware, komikController.deleteKomik);

module.exports = router;