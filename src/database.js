const mongoose = require("mongoose");
const URI =
  process.env.status === "PROD"
    ? process.env.DBURI_PROD
    : process.env.DBURI_DEV;
const db = mongoose.connection;

function connect() {
  mongoose.connect(URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
  });

  db.on("open", () => {
    console.log("base de datos conectada");
  });
 
  db.on("error", (error) => console.log("error: ", error));
}

connect();
