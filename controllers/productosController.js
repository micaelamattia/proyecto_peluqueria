const dbProducts = require("../data/dataBase");

module.exports = {
    listar: function(req,res){
        res.send(dbProducts)

    }

}