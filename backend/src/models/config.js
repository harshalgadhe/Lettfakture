import {sq} from "../db/database.js";
import { DataTypes } from "sequelize";

const Config = sq.define("lettfaktura_configuration", {
    key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    value: {
        type: DataTypes.TEXT,
    },
});


await Config.sync().then(() => {
    console.log("Config Model Synced");
})

export default Config;