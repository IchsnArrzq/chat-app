import { ThemeType } from "@/ts/types/theme";
import { createContext } from "react";

const ThemeContext = createContext<ThemeType>("light");

export default ThemeContext;
