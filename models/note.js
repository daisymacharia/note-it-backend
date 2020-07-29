import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoteShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  participants: {
    type: [Object],
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Note = "note";
export default mongoose.model(Note, NoteShema);
