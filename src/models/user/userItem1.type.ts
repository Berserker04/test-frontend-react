import * as yup from "yup";

export interface IUserItem1 extends IPerson {
  state: boolean;
}

export const SChemaUserItem1 = yup
  .object({
    name: yup.string().max(40, "El nombre superar los 40 caracteres").required("El nombre es requerido"),
    email: yup
      .string()
      .email("El correo ingresado es invalido")
      .required("El correo es requerido"),
    phone: yup
      .number()
      .typeError('Debe ser un número')
      .integer("El telefono debe ser un número")
      .required("El telefono es requerido")
      .test("digitos", "Debe tener entre 6 y 10 digitos", (value) => {
        if (value !== undefined) {
          const digitos = value.toString().length;
          return digitos >= 6 && digitos <= 10;
        }
        return true;
      }),
    state: yup.boolean().default(false),
  })
  .required();
