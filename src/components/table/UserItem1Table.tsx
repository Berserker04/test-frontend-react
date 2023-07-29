import Swal from "sweetalert2";
import { Toaster } from "react-hot-toast";

import { IUserItem1 } from "../../models/user/userItem1.type";
import { deleteUserByEmail } from "../../services/item1/item1.service";
import { notifySuccess } from "../../helpers/notifyToast";

interface props {
  users: IUserItem1[];
  updateTable: () => void;
  editUserHandler: (user: IUserItem1) => void;
}

const UserTable = ({ users, updateTable, editUserHandler }: props) => {
  const deleteUser = (email: string) => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUserByEmail(email);
        updateTable();
        notifySuccess("Eliminado con exito!");
      }
    });
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" align="center">
              #
            </th>
            <th scope="col" align="center">
              Nombre
            </th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Estado</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {!users.length && (
            <tr>
              <td colSpan={6}>
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
              <th scope="row">{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.state ? "Activo" : "Desactivo"}</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => editUserHandler(user)}
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@fat"
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.email)}
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </>
  );
};

export default UserTable;
