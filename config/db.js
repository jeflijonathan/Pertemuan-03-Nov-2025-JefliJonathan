import mongoose from "mongoose";
import { MONGO_URI } from "../common/utils/env.js";

class DB {
  database;
  constructor() {
    this.connectionDB();
  }

  async connectionDB() {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected");
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}
export default DB;
