const router = require("express").Router();
const Movie = require("../models/Movie");
const verifyToken = require("../verifyToken");



//Create
router.post("/", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not Authorized!");
    }
});




//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not Authorized!");
    }
});


//Delete
router.delete("/:id", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not Authorized!");
    }
});


//Get
router.get("/find/:id", verifyToken, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

//Get All Movies
router.get("/", verifyToken, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {       
            const movies = query
                ? await Movie.find().sort({ _id: -1 }).limit(5)
                : await Movie.find();
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json(err);
        }   
    } else {
        res.status(403).json("Not Authorized!");
    }
}); 

//Get Random Movies
router.get("/random", verifyToken, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {    
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([ 
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) { 
        res.status(500).json(err);
    }
});


module.exports = router;