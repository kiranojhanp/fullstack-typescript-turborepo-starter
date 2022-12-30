const baseUrl = "https://jsonplaceholder.typicode.com";

export const getData = async (path: string) => {
  return await (await fetch(`${baseUrl}/${path}`)).json();
}
