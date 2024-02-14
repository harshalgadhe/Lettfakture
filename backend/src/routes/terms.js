import express from "express";
import Config from "../models/config.js";

const router = express.Router();

// retrieve the terms from the config table
router.route('/terms').get(async (req,res) => {
    const out = await Config.findOne({
        where: {
            'key':'terms'
        }
    })
    console.log(out);
    res.send(out)
});

export default router;