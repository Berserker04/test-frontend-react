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
    const value = target.value.toLowerCase();
    const userResultFilter = users.filter(
      (user) =>
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.phone.toString().toLowerCase().toString().includes(value)
    );
    setUserFilter([...userResultFilter]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { getUsers, filterUserHandler, usersFilter };
};

export default useGetUser;
