import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";
import { Server } from "http";
import seedSuperAdmin from "./app/DB";

const PORT = process.env.PORT || config.port;

let server: Server;
const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    seedSuperAdmin();
    server = app.listen(PORT, () => {
      console.log(`🚀Gym Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
};

main();

process.on("unhandledRejection", () => {
  console.log(`🤷‍♂️ Unhandled rejection, shutting down...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`🤷‍♂️ Uncaught exception, shutting down...`);
  process.exit(1);
});
