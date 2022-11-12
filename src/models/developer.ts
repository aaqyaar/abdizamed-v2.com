import { Schema, model, models } from "mongoose";

const schema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: true },
  avatar: { type: String, required: true },
  github: { type: String, required: true },
  linkedin: { type: String, required: true },
  resume: { type: String, required: true },
});

const Developer = models.Developer || model("Developer", schema);
export default Developer;
