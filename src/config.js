import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 27017;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Juan29:guxG_fxSi8Cg4aR@cluster0.gihte.mongodb.net/test";
