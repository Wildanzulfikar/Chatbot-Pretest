const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gemma3:1b",  
                prompt: userMessage,
                stream: false
            })
        });

        const data = await response.json();

        res.json({
            reply: data.response
        });

    } catch (error) {
        res.status(500).json({
            reply: "Error: AI tidak bisa diakses"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend jalan di http://localhost:${PORT}`);
});
