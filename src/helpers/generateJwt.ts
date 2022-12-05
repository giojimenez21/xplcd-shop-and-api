import jwt from "jsonwebtoken";

export const generateJWT = (id: number) =>
    new Promise((resolve, reject) => {
        const payload = { id };

        jwt.sign(
            payload,
            process.env.SECRET_JWT!,
            {
                expiresIn: "365d",
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se pudo generar el token");
                } else {
                    resolve(token);
                }
            }
        );
    });
