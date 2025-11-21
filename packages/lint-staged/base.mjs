/**
 * @type {Record<string, (filenames: string[]) => string[]>}
 */
export const config = {
  "*.(ts|tsx)": () => "npm run check-types",
  "*.(ts|tsx|js)": (filenames) => [
    `npx eslint --fix --no-warn-ignored --max-warnings 0 ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],
};
