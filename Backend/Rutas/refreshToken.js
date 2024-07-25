const express = require("express");
const { jsonResponse } = require("../Lib/jsonResponse");
const { verifyRefreshToken } = require("../Auth/verifyTokens");
const { generateAccessToken }  = require("../Auth/generateTokens");
const getUserInfo = require("../Lib/getUserInfo");
const User = require("../Schema/user");
const Token = require("../Schema/token");
const router = express.Router();

router.post("/", async function (req, res, next) {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ error: "Token de actualización no proporcionado" });
    }

    try {
        // Buscar el token en la base de datos
        const tokenDocument = await Token.findOne({ token: refreshToken });
        
        if (!tokenDocument) {
            return res.status(403).json({ error: "Token de actualización inválido" });
        }

        // Verificar el token de actualización
        const payload = verifyRefreshToken(tokenDocument.token);
        
        // Obtener la información del usuario
        const userInfo = getUserInfo(payload.user);

        // Generar un nuevo token de acceso
        const accessToken = generateAccessToken(userInfo);
        // Responder con el nuevo token de acceso
        res.json(jsonResponse(200, { accessToken }));
    } catch (error) {
        console.log("Error al procesar el token de actualización:", error);
        return res.status(403).json({ error: "Token de actualización inválido" });
    }
});

module.exports = router;