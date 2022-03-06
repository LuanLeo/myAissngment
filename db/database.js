let mongoose = require('mongoose');


const username = "luandtgcs200115";
const password = "Conso123";
const dbname = "ATNshop";
const mongodb_url  = "mongodb+srv://" + username + ":" + password + "@cluster0.q12jx.mongodb.net/" + dbname + "?retryWrites=true&w=majority";

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(mongodb_url, {useNewUrlParser: true})
            .then(() => {
                console.log("Database connection successfully!");
            })
            .catch(err => {
                console.log("Database connection error!");
            })
    }
}

module.exports = new Database();