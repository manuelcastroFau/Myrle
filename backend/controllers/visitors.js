const manager = require('../managers/visitor');


const Controller = {
    register: async (req, res) => {
        var name = req.body.name;
        var date_of_visit = req.body.date_of_visit;
        var number = req.body.number;
        var user = {
            "name":name,
            "date_of_visit":date_of_visit,
            "number": number
        }
        try{
            await manager.add(user);
            return res.status(200).send({status:200, response:"Users added"});
        } catch (ex){
            return res.status(500).send(ex.message);
        }
    },
    get_all:async (req, res) => {
        if( req.session.loggedin){
            try{
                data = await manager.get_all();
                return res.status(200).send({status:200,response:data});
            }
            catch (ex) {
                console.log(ex.message)
                return res.status(500).send(ex.message);
            }
        }
        else
            return res.status(401).send({status:401,response:"Unautherized"});
    }
}

module.exports = Controller;