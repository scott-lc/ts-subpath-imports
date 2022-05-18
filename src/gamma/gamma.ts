import { doBeta } from "#~/beta/index.js";

export const doGamma = (): string => [doBeta(), "gamma"].join(", ");
