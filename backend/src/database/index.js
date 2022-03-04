import mongoose from 'mongoose';

class DataBase {
    constructor() {
        this.mongoDataBase();
    }
    mongoDataBase() {
        this.mongoDBConnection = mongoose.connect('mongodb://localhost/plmimports').then(() => {
            console.log("[database] database connected successfuly")
        }).catch((error) => {
            console.log("[database] error connecting to database" + error)
        })
    }
}

export default new DataBase();
