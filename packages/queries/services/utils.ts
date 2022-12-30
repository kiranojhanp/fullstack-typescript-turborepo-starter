export const getData = async (baseUrl: string, path?: string) => {
  return await (await fetch(`${baseUrl}${path || ""}`)).json();
};
