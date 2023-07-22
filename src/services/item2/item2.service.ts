import { IUserItem2 } from "../../models/user/userItem2.type";

const URL_API = "https://jsonplaceholder.typicode.com/users";

export const getUsers2Service = async (): Promise<IUserItem2[]> => {
  return fetch(URL_API)
    .then((response) => response.json())
    .then((userList: IUserItem2[]) => userList.slice(0, 5));
};
