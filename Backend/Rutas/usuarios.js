const express = require('express');
const router = express.Router();
const User = require('../Schema/user');
const jsonResponse = (status, data) => ({ status, data });

router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json(
                jsonResponse(400, {
                    message: 'Los datos son incorrectos'
                })
            );
        } else {
            const nuevoUsuario = new User({ name, email, password });
            await nuevoUsuario.save();

            return res.status(200).json(
                jsonResponse(200, {
                    message: "Usuario creado!", 
                    user: nuevoUsuario,
                })
            );
        }
    } catch (error) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "El usuario no pudo ser creado."
            })
        );
    }
});

module.exports = router;
