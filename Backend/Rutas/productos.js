const router = require("express").Router();
const Producto = require("../Schema/producto");
const jsonResponse = (status, data) => ({ status, data });

router.post('/', async(req, res) => {
    const { id, imageUrl, name, descripcion, precio } = req.body;

    if(!id || !imageUrl || !name || !descripcion || !precio) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Todos los campos son requeridos."
            })
        )
    };

    try {
        const nuevoProducto = new Producto({ id, imageUrl, name, descripcion, precio })
        await nuevoProducto.save();
        
        return res.status(200).json(
            jsonResponse(200, {
                message: "Producto Publicado.", 
                Comment: nuevoProducto,
            })
        );
    } catch {
        res.status(400).json(
            jsonResponse(400, {
                error: "El Producto no pudo ser publicado."
            })
        )
    };
});

module.exports = router;