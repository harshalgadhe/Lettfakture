import Config from "../models/config.js";

// Pass the key, value pair to create an new record in config table
export async function createItem(key,value){
    const [item, created] = await Config.findOrCreate({
        where: { key }, 
        defaults: { value } 
    });

    if (!created) {
        await Config.update({ value }, { where: { key } });
    }
};