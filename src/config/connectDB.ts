import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGO_URI as string;

if (!MONGO_URI)
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env"
  );

let globalAny: any = global;

let cached = globalAny;

if (!cached) {
  cached = globalAny = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true,
    };
    cached.promise = await mongoose.connect(MONGO_URI, opts);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}
