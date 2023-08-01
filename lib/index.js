import { fileURLToPath } from "node:url";

export const gamesPath = fileURLToPath(new URL("../static/", import.meta.url));