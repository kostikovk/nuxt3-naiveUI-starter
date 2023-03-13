import husky from "husky";

const isCi = process.env.CI !== undefined;

if (!isCi) husky.install();
