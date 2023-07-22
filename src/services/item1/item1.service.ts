import { IUserItem1 } from "../../models/user/userItem1.type";

const dbKey = "users";

export const registerUserService = (newUser: IUserItem1) => {
  const database = localStorage.getItem(dbKey);
  const db: IUserItem1[] = database ? JSON.parse(database) : [];

  const existUser = db.find((user) => user.email === newUser.email);
  if (!existUser) {
    db.push(newUser);
    localStorage.setItem(dbKey, JSON.stringify(db));
    return true;
  }
  return false;
};

export const getUsersService = async (): Promise<IUserItem1[]> => {
  const database = localStorage.getItem(dbKey);
  return database ? JSON.parse(database) : [];
};

export const deleteUserByEmail = async (email: string) => {
  const users = await getUsersService();
  const updatedUsers = await users.filter((user) => user.email !== email);
  await saveUsers(updatedUsers);
};

const saveUsers = async (users: IUserItem1[]) => {
  await localStorage.setItem(dbKey, JSON.stringify(users));
};

export const updateUserByEmail = async (userUpdate: IUserItem1) => {
  const users = await getUsersService();
  const updatedUsers = await users.map((user) => {
    if (user.email === userUpdate.email) {
      return {
        ...user,
        ...userUpdate,
      };
    }
    return user;
  });
  await saveUsers(updatedUsers);
};
