const express = require('express');
const router = express.Router();
const Producto = require('../Schema/producto');

router.get('/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const producto = await Producto.findById(productId);

        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Productos obtenidos', producto });
    } catch (error) {
        console.error('Error al obtener el producto: ', error);
        return res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

module.exports = router;