import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../../styles";
import { useForm, useInput } from "lx-react-form";
import { ApiData } from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const modulos = [
  {
    value: "Primeiro módulo (Introdução ao Frontend)",
    label: "Primeiro módulo",
  },
  {
    value: "Segundo módulo (Frontend Avançado)",
    label: "Segundo módulo",
  },
  {
    value: "Terceiro módulo (Introdução ao Backend)",
    label: "Terceiro módulo",
  },
  {
    value: "Quarto módulo (Backend Avançado)",
    label: "Quarto módulo",
  },
];

const RegisterForm = () => {
  const history = useHistory();

  const registerSucess = () => {
    history.push("/");
    toast.success("Login efetuado com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const RegisterApi = (data) => {
    ApiData.post("/users", data)
      .then((response) => registerSucess())
      .catch((error) => console.log(error));
  };

  const name = useInput({
    name: "name",
  });
  const email = useInput({
    name: "email",
    validation: "email",
  });
  const password = useInput({
    name: "password",
    validation: "senha",
  });
  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
  });

  const bio = useInput({
    name: "bio",
  });
  const contact = useInput({
    name: "contact",
  });
  const course_module = useInput({
    name: "course_module",
  });
  const form = useForm({
    formFields: [name, email, password, bio, contact, course_module],
    submitCallback: (formData) => {
      RegisterApi(formData);
    },
  });

  return (
    <StyledBox
      component="form"
      onSubmit={form.handleSubmit}
      sx={{
        flexDirection: "column",
        backgroundColor: "greyscale.grey3",
        gap: 1.8,
        p: 2,
      }}
    >
      <Typography>Crie sua conta</Typography>
      <Typography variant="caption" sx={{ color: "greyscale.grey1" }}>
        Rapido e grátis, vamos nessa
      </Typography>
      <TextField
        label="Nome"
        helperText={name.error}
        variant="filled"
        fullWidth
        type="text"
        {...name.inputProps}
      />
      <TextField
        label="Email"
        helperText={email.error}
        variant="filled"
        fullWidth
        type={"email"}
        {...email.inputProps}
      />
      <TextField
        label="Senha"
        helperText={password.error}
        variant="filled"
        fullWidth
        type={"password"}
        {...password.inputProps}
      />
      <TextField
        label="Confirmar Senha"
        helperText={confirmPassword.error}
        variant="filled"
        fullWidth
        type={"password"}
        {...confirmPassword.inputProps}
      />
      <TextField
        label="Bio"
        helperText={bio.error}
        variant="filled"
        fullWidth
        type={"text"}
        {...bio.inputProps}
      />
      <TextField
        label="Contato"
        helperText={contact.error}
        variant="filled"
        fullWidth
        type={"text"}
        {...contact.inputProps}
      />
      <TextField
        label="Selecionar módulo"
        helperText={course_module.error}
        variant="filled"
        fullWidth
        select
        SelectProps={{
          native: true,
        }}
        {...course_module.inputProps}
      >
        {modulos.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <Button variant="contained" type="submit" fullWidth>
        Cadastrar
      </Button>
    </StyledBox>
  );
};

export default RegisterForm;
