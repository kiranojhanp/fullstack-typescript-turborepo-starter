import type { Post } from '../types/posts';
import { getData } from "./utils";

const baseUrl: string = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<Post[]> => {
  return await getData(baseUrl, "/posts");
}
