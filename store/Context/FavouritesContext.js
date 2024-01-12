import { createContext, useReducer } from "react";

export const FavouritesContext = createContext([]);

export default function FavouritesContextProvider({ children }) {
  const [FavouriteState, dispatch] = useReducer(reducerfunc, []);

  return (
    <FavouritesContext.Provider value={[FavouriteState, dispatch]}>
      {children}
    </FavouritesContext.Provider>
  );
}

const reducerfunc = (state, action) => {
  let id = action.id;
  if (action.type == "add") {
    return [...state, id];
  }

  if (action.type == "remove") {
    console.log("r");
    return state.filter((item) => item !== id);
  }
};
