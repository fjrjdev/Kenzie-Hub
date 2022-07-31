import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../img/Logo.png";
import Form from "../../components/Form";
import { StyledBox } from "../../styles";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: 3,
        alignItems: "center",
      }}
    >
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <StyledBox
        sx={{
          flexDirection: "column",
          gap: 3,
          bgcolor: "greyscale.grey3",
          width: "100%",
          minWidth: "330px",
          maxWidth: "390px",
          p: 2,
        }}
      >
        <Form />
        <Typography variant="caption" sx={{ color: "greyscale.grey1" }}>
          Ainda não possui uma conta?
        </Typography>
        <Button
          sx={{
            height: 50,
            bgcolor: "greyscale.grey1",
            p: 2,
            "&:hover": { bgcolor: "greyscale.grey2" },
          }}
          variant="contained"
          fullWidth
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </StyledBox>
    </Box>
  );
}

export default Login;
