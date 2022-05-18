import { doAlpha } from "../alpha/index.js";

export const doBeta = (): string => [doAlpha(), "beta"].join(", ");
