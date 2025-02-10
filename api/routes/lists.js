const router = require("express").Router();
const List = require("../models/List");
const verifyToken = require("../verifyToken");



//Create
router.post("/", verifyToken, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
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
            await List.findByIdAndDelete(req.params.id);    
            res.status(200).json("List has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not Authorized!");
    }
}); 


//Get
router.get("/", verifyToken, async (req, res) => {
    const typeQuery = req.query.type;   
    const genreQuery = req.query.genre;
    if (req.user.isAdmin) {
        try {
            let list = [];
            if (typeQuery) {
                    if (genreQuery) {
                    list = await List.aggregate([
                        { $match: { type: typeQuery, genre: genreQuery } },
                        { $sample: { size: 10 } },
                    ]);
                } else {
                    list = await List.aggregate([
                        { $match: { type: typeQuery } },
                        { $sample: { size: 10 } },
                    ]);
                }
            } else {    
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                ]);
            }
            res.status(200).json(list);
        } catch (err) { 
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not Authorized!");
    }
}); 




module.exports = router;