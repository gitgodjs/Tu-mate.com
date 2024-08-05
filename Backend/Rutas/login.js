const router = require("express").Router();
const { jsonResponse } = require("../Lib/jsonResponse");
const User = require("../Schema/user");

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
    
        if (password && password.length < 8) {
            errorMessage = 'contraseña demasiado corta';
        }
    
        return res.status(400).json(
            jsonResponse(400, {
                error: "Contraseña demasiado corta"
            })
        );
    }

    try {
        const nameExist = await User.nameExist(name);
        const emailExist = await User.emailExist(email);

        if (nameExist) {
            return res.status(400).json(
                jsonResponse(400, {
                    error: "El nombre ya está en uso."
                })
            );
        }

        if (emailExist) {
            return res.status(400).json(
                jsonResponse(400, {
                    error: "El correo electrónico ya está en uso."
                })
            );
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        return res.status(200).json(
            jsonResponse(200, 
                { message: "Usuario creado!" }
            )
        );

    } catch (error) {
        return res.status(500).json(
            jsonResponse(500, {
                error: "Error al crear el usuario!"
            })
        );
    }
});

module.exports = router;