import express from "express";
import Config from "../models/config.js";

const router = express.Router();

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