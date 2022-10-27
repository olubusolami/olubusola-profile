const express = require("express");
const router = express.Router()
const bioController = require("./bioController")


//get profile
router.get("/profile", (req,res)=>{
    res.json(bioController.bioDetails)
});

module.exports = router;