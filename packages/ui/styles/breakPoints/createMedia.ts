import { breakPoints } from ".";

export const generateMdeia = () => {
  const genMedia = {} as { [key: string]: string };
  Object.entries(breakPoints).forEach(([key, value]) => {
    genMedia[key] = `(max-width:${value})`;
  });

  return genMedia;
};
