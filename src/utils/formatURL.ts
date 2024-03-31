export function formatURL(input: string) {
  let websiteName = input;
  if (websiteName.slice(0, 8) === "https://") {
    websiteName = websiteName.slice(8, websiteName.length);
  }
  if (websiteName.endsWith("/")) {
    websiteName = websiteName.slice(0, -1);
  }
  return websiteName;
}
