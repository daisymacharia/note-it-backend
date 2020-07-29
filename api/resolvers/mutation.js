import Note from "../../models/note";
import { isTokenValid } from "../../validate";

export const Mutation = {
  async createNote(_, { input }, context) {
    return await Note.create(input);
  },

  async updateNote(_, { _id, input }, context) {
    console.log(input);
    return await Note.findOneAndUpdate({ _id }, input, { new: true });
  },

  async deleteNote(_, { _id }, context) {
    return await Note.findByIdAndRemove({ _id });
  },
};
