const path = require("path");
const router = require("express").Router();

const apiRoutes = require("./apiRoutes");

// API Routes
// router.use("/api", apiRoutes);

router.use("/", apiRoutes);


// If no API Routes are hit, send the React App
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;