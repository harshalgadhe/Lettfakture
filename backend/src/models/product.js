import {sq} from "../db/database.js";
import { DataTypes } from "sequelize";

const Product = sq.define("lettfaktura_product", {
    product: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    in_price: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT,
    },
    creation_date : {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});


await Product.sync().then(() => {
    console.log("Product Model Synced");
})

export default Product;