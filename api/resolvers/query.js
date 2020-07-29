import Note from "../../models/note";
import { isTokenValid } from "../../validate";

export const Query = {
  async allNotes(_, args, context) {
    return await Note.find();
  },

  async getNote(_, { _id }, context) {
    let note = await Note.findById(_id);
    return await Note.findById(_id);
  },
};
