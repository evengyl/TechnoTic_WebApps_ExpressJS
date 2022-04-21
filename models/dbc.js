const sqlite = require("sqlite")
const sqlite3 = require("sqlite3")
let dbConnector

module.exports = {
    
    connect : () => {
        if(!dbConnector)
        {
            dbConnector = sqlite.open({
                filename : "./models/database.db",
                driver : sqlite3.Database
            })
        }
    },

    get : () => {
        if(!dbConnector)
            this.connect
        else
            return dbConnector
    }
}