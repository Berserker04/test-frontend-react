import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

import { IUserItem1, SChemaUserItem1 } from "../../models/user/userItem1.type";
import {
  registerUserService,
  updateUserByEmail,
} from "../../services/item1/item1.service";

interface props {
  updateTable: () => void;
  userEdit?: IUserItem1;
}

const notify = (text: string) =>
  toast.success(text, {
    position: "top-right",
  });

const notifyError = (text: string) =>
  toast.error(text, {
    position: "top-right",
  });

const UpOrAddUserModal = ({ updateTable, userEdit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SChemaUserItem1),
  });
  const onSubmit = async (data: IUserItem1) => {
    if (userEdit) {
      await updateUserByEmail(data);
      notify("Actualizado con exito!");
    } else {
      const result = await registerUserService(data);
      if (result) {
        notify("Registrado con exito!");
      } else {
        notifyError("Usuario ya registrado!");
      }
    }
    reset();
    updateTable();
    document.getElementById("modalClose")?.click();
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Registrar
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name?.message && "is-invalid"
                    }`}
                    id="recipient-name"
                    placeholder="usuario"
                    defaultValue={userEdit?.name}
                    {...register("name")}
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    {errors.name?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email?.message && "is-invalid"
                    }`}
                    id="recipient-name"
                    placeholder="email@example.com"
                    defaultValue={userEdit?.email}
                    {...register("email")}
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    {errors.email?.message}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Teléfono:
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors.phone?.message && "is-invalid"
                    }`}
                    id="recipient-name"
                    placeholder="31235..."
                    defaultValue={userEdit?.phone}
                    {...register("phone")}
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    {errors.phone?.message}
                  </div>
                </div>
                {userEdit && (
                  <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">
                      Estado:
                    </label>
                    <select
                      className={`form-control ${
                        errors.state?.message && "is-invalid"
                      }`}
                      {...register("state")}
                    >
                      <option value={1} selected={userEdit.state}>
                        Activo
                      </option>
                      <option value={0} selected={!userEdit.state}>
                        Desactivo
                      </option>
                    </select>

                    <div
                      id="validationServerUsernameFeedback"
                      className="invalid-feedback"
                    >
                      {errors.state?.message}
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="modal-footer">
              <button
                id="modalClose"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button form="userForm" type="submit" className="btn btn-primary">
                {userEdit ? "Editar" : "Enviar"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default UpOrAddUserModal;
