import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Listening on http://localhost:${4000}`);
};

app.listen(PORT, handleListening);
