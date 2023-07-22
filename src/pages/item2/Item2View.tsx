import UserItem2Table from "../../components/table/UserItem2Table";
import { typeOrder } from "../../models/user/userItem2.type";
import useFecthUser from "./hooks/useFetchUser";

const Item2View = () => {
  const { filterUserHandler, usersFilter, orderUserHandler } = useFecthUser();
  return (
    <div className="container py-3">
      <div className="card">
        <h5 className="card-header fs-2">Filtrado de usuarios</h5>
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
            <div className="col-3 d-flex justify-content-end">
              <select
                className="form-control"
                name=""
                onChange={(e) => orderUserHandler(e.target.value)}
              >
                <option value={typeOrder.type1}>Alfaveticamente</option>
                <option value={typeOrder.type2}>Ascendente</option>
                <option value={typeOrder.type3}>Descendente</option>
              </select>
            </div>
          </div>
          <hr />
          <UserItem2Table users={usersFilter} />
        </div>
      </div>
    </div>
  );
};

export default Item2View;
