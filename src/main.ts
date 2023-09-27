const express = require("express");
const app = express();
const botRouter = require("./routes/BotRoutes");
 
app.use("/api/bots", botRouter);

app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;