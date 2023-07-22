import { useState } from "react";
import UpOrAddUserModal from "../../components/modal/UpOrAddUserModal";
import UserTable from "../../components/table/UserTable";
import { IUserItem1 } from "../../models/user/userItem1.type";
import useGetUser from "./hooks/useGetUser";

const Item1View = () => {
  const [userEdit, setUserEdit] = useState<IUserItem1>();
  const { getUsers, usersFilter, filterUserHandler } = useGetUser();

  const editUserHandler = (user: IUserItem1) => {
    setUserEdit(user);
  };
  return (
    <div className="container py-3">
      <div className="card">
        <h5 className="card-header fs-2">Crud de usuarios</h5>
        <div className="card-body">
          <div className="row d-flex justify-content-between w-100">
            <div className="col-6 ">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar usuario..."
                onChange={filterUserHandler}
              />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button
                onClick={() => setUserEdit(undefined)}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@title "
              >
                Añadir usuario
              </button>
            </div>
          </div>
          <hr />
          <UserTable
            users={usersFilter}
            updateTable={() => getUsers()}
            editUserHandler={(user: IUserItem1) => editUserHandler(user)}
          />
          <UpOrAddUserModal
            updateTable={() => getUsers()}
            userEdit={userEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default Item1View;
