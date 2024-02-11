import Config from "../models/config.js";

export async function createItem(key,value){
    const [item, created] = await Config.findOrCreate({
        where: { key }, 
        defaults: { value } 
    });

    if (!created) {
        await Config.update({ value }, { where: { key } });
    }
};