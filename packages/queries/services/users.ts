import type { User } from "../types/users";
import { getData } from "./utils";

const baseUrl: string = "http://localhost/api";

export const getUsers = async (): Promise<User[]> => {
  return await getData(baseUrl);
};
