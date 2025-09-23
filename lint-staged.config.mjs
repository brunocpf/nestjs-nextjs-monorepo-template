/**
 * @type {Record<string, (filenames: string[]) => string[]>}
 */
const config = {
  "(apps|packages)/**/*.(ts|tsx)": () => "npm run check-types",
  "(apps|packages)/**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],
};

export default config;
