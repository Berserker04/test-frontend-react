import { IUserItem2 } from "../../models/user/userItem2.type";

interface props {
  users: IUserItem2[];
}

const UserItem2Table = ({ users }: props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Compañia</th>
          <th scope="col">Sitio web</th>
        </tr>
      </thead>
      <tbody>
        {!users.length && (
          <tr>
            <td colSpan={7}>
              <div
                className="alert alert-primary d-flex align-items-center w-100 text-justify justify-content-center"
                role="alert"
              >
                <p>No se encontraron datos</p>
              </div>
            </td>
          </tr>
        )}
        {users.map((user, i) => (
          <tr key={i}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.street}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserItem2Table;
