const express = require("express");

const app = express();
const PORT = process.env.PORT || 8001; // Use Azure-provided port or fallback to 8001

app.get("/", (req, res) => {
    res.json({ "msg": "Hello, this message is from the server" });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
