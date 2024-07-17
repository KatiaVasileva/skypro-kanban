import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getThemeFromLocalStorage,
  saveThemeToLocalStorage,
} from "../lib/helpers";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);

  useEffect(() => {
    saveThemeToLocalStorage(theme);
  }),
    [theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
