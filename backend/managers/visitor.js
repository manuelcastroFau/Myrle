var db = require( '../mongoUtil.js' ).getDb();
const usersCol = db.collection('visitors')
var ObjectID = require('mongodb').ObjectID;

const Manager = {
    add:  user => {
        usersCol.insertOne(user, function(err, res) {
            if (err) throw err;
            return true});
    },
    get_all: ()=>{
        return new Promise(function(resolve, reject) {   
            usersCol.aggregate([
                {$match:{}}
            ]).toArray(function(err, results) {
                if (err) {
                    reject(err);
                    throw err;
                };
                resolve(results);
            });
          });
    }
}

module.exports = Manager;