const dbProducts = require("../data/dataBase");

module.exports = {
    index:function(req, res, next) {
        res.render('index', 
        { title: 'Peluqueria',
        producto: dbProducts
    })
    }
}