import express from "express";
import Config from "../models/product.js";

const router = express.Router();

router.route('/get_all').get(async (req,res) => {
    const out = await Config.findAll({
    })
    console.log(out);
    res.send(out)
});

export default router;