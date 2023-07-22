import React, { useCallback, useEffect, useState } from "react";
import { getUsers2Service } from "../../../services/item2/item2.service";
import {
  IUserItem2,
  typeOrder,
} from "../../../models/user/userItem2.type";

const useFecthUser = () => {
  const [users, setUser] = useState<IUserItem2[]>([]);
  const [usersFilter, setUserFilter] = useState<IUserItem2[]>([]);

  const getUsers = useCallback(async () => {
    const usersList = await getUsers2Service();
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
        user.phone.toLowerCase().toString().includes(value)
    );
    setUserFilter([...userResultFilter]);
  };

  const orderUserHandler = (orderBy: string) => {
    const userResultFilter = [...users];
    if (orderBy === typeOrder.type1) {
      userResultFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (orderBy === typeOrder.type2) {
      userResultFilter.sort((a, b) => a.id - b.id);
    } else {
      userResultFilter.sort((a, b) => b.id - a.id);
    }

    setUserFilter(userResultFilter);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { filterUserHandler, usersFilter, orderUserHandler };
};

export default useFecthUser;
