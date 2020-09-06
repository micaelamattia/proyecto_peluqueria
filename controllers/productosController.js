const dbProducts = require("../data/dataBase");

module.exports = {
    listar: function(req,res){
        res.send(dbProducts)

    },
    detalle: function(req, res){
        let id = req.params.id;
        let producto = dbProducts.filter(producto=>{
            return producto.id == id
        })
        res.render('detalleProd', {
            title: 'Detalle del producto',
            producto:producto
        })
    }

}