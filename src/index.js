import app from "./app";
import "./utils/mongoose";

const port = process.env.PORT || 3000; // Usa el puerto definido por la variable de entorno PORT, o 3000 si no está definido

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
