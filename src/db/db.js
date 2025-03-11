import { Sequelize } from "sequelize";
import chalk from 'chalk';

const host = "localhost";
const port = 3307;
const database = "recipes";
const user = "alston";
const password = "4B76V3ddugOe93dz";

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'mysql',
    logging: msg => console.log(`SQL: ${chalk.blue(msg)}`)
})

try {
    //try to connect!
    await sequelize.authenticate();
    console.log("Connected to DB!");
} catch (err) {
    console.log(`Unable to connect to DB: ${err}`);
}

export default sequelize;