import { type } from "../type/type";

export const CategoryReduce = (state = {}, action) => {
  switch (action.type) {
    case type.category:
      return {
        category: action.payload.category,
      };
    default:
      return state;
  }
};
