import { Button, TextField, Typography } from "@mui/material";
import { useForm, useInput } from "lx-react-form";
import React from "react";
import { StyledBox } from "../../styles";
import { ApiData } from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const history = useHistory();

  function loginSucess(data) {
    toast.success("Login efetuado com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user.id);
    history.push("/home");
  }
  const LoginApi = (data) => {
    ApiData.post("/sessions", data)
      .then((response) => loginSucess(response.data))
      .catch((error) =>
        toast.error("Ops, algo deu errado, tente novamente!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  const email = useInput({
    name: "email",
    validation: "email",
  });
  const password = useInput({
    name: "password",
    validation: "senha",
  });

  const form = useForm({
    formFields: [email, password],
    submitCallback: (formData) => {
      LoginApi(formData);
    },
  });

  return (
    <StyledBox
      component="form"
      onSubmit={form.handleSubmit}
      sx={{
        flexDirection: "column",
        bgcolor: "greyscale.grey3",
        gap: 3,
        width: "100%",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" component="h1">
        Login
      </Typography>
      <TextField
        label="Email"
        helperText={email.error}
        variant="filled"
        fullWidth
        type="email"
        {...email.inputProps}
      />
      <TextField
        label="Senha"
        helperText={password.error}
        variant="filled"
        fullWidth
        type="password"
        {...password.inputProps}
      />
      <Button variant="contained" type="submit" fullWidth sx={{ height: 50 }}>
        Entrar
      </Button>
    </StyledBox>
  );
};

export default Form;
