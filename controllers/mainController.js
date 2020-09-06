const dbProducts = require("../data/dataBase");

module.exports = {
    index:function(req, res, next) {
        let visitada= dbProducts.filter(producto=>{
            return producto.category == 'visited'
        })
        let ofertas= dbProducts.filter(producto =>{
            return producto.category == 'in-sale'
        })
        res.render('index', 
        { title: 'Peluqueria',
        ofertas: ofertas,
        visitada:visitada,
    });
    }
}