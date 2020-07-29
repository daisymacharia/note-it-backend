import Note from "../../models/note";
import { isTokenValid } from "../../validate";

function buildFilters({ OR = [], organization_contains, title_contains }) {
  const filter = title_contains || organization_contains ? {} : null;
  if (title_contains) {
    filter.title = { $regex: `.*${title_contains}.*` };
  }
  if (organization_contains) {
    filter.organization = { $regex: `.*${organization_contains}.*` };
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(buildFilters(OR[i]));
  }
  return filters;
}

export const Query = {
  async allNotes(_, { filter }, context) {
    let query = filter ? { $or: buildFilters(filter) } : {};
    return await Note.find(query);
  },

  async getNote(_, { _id }, context) {
    let note = await Note.findById(_id);
    return await Note.findById(_id);
  },
};
