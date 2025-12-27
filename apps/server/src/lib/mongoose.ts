import { tryCatch } from "@repo/common/functions";
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  const response = await tryCatch(
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017", {
      dbName: "wishlist-appv2",
    })
  );
  if (!response.success) {
    console.error("Failed to connect to MongoDB:", response.error);
    return;
  }
  return response.data;
};
