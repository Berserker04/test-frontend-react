import { useCallback, useEffect, useState } from "react";
import { getUsersService } from "../../../services/item1/item1.service";
import { IUserItem1 } from "../../../models/user/userItem1.type";

const useGetUser = () => {
  const [users, setUser] = useState<IUserItem1[]>([]);
  const [usersFilter, setUserFilter] = useState<IUserItem1[]>([]);

  const getUsers = useCallback(async () => {
    const usersList = await getUsersService();
    setUser([...usersList]);
    setUserFilter([...usersList]);
  }, []);

  const filterUserHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const userResultFilter = users.filter(
      (user) =>
        user.name.includes(target.value) ||
        user.email.includes(target.value) ||
        user.phone.toString().includes(target.value)
    );
    setUserFilter([...userResultFilter]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { getUsers, filterUserHandler, usersFilter };
};

export default useGetUser;
