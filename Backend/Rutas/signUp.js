const router = require("express").Router();
const { jsonResponse } = require("../Lib/jsonResponse");
const User = require("../Schema/user");
const getUserInfo = require("../Lib/getUserInfo");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Fields are required"
            })
        );
    }

    try {
        const name = await User.findOne({ email });

        if (name) {
            const correctPassword = await name.comparePassword(password, name.password);

            if (correctPassword) {
                const accessToken = name.createAccessToken();
                const refreshToken = await name.createRefreshToken();
                
                res.status(200).json(
                    jsonResponse(200, { name: getUserInfo(name), accessToken, refreshToken })
                );
            } else {
                res.status(400).json(
                    jsonResponse(400, {
                        error: "No existe esta contraseña."
                    })
                );
            }
        } else {
            res.status(400).json(
                jsonResponse(400, {
                    error: "No existe este usuario."
                })
            );
        }
    } catch (error) {
        console.error("Error en la autenticación:", error);
        res.status(500).json(
            jsonResponse(500, {
                error: "Error interno del servidor"
            })
        );
    }
});

module.exports = router;
