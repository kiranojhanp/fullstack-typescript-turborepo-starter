import { getData } from "./utils";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<Post[]> => {
  return await getData("/posts");
}
