import Sequelize from 'sequelize';

// Creating sequlize object to connect with our DB
export const sq = new Sequelize("pkefkomf", "pkefkomf", "KHcLs9iUMjuQgKEnzcPxwVGlYK6XAQqC", {
    host: "lucky.db.elephantsql.com",
    dialect: 'postgres', 
});

export async function connectDB(){
    try {
        await sq.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};