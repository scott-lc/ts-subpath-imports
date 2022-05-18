import { doGamma } from "#~/gamma/index.js";

export const doDelta = (): string => [doGamma(), "delta"].join(", ");
