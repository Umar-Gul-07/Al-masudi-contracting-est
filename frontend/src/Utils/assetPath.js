export const assetPath = (path) => {
  const normalized = String(path || "").replace(/^\/+/, "");
  return `${process.env.PUBLIC_URL}/${normalized}`;
};
