import { type } from "../type/type";

export const CategoryAction = (category) => ({
  type: type.category,
  payload: {
    category,
  },
});
