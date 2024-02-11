import express from "express";

console.log("Yoo13");

const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})