import React from "react";
import { StyledBox } from "../../styles";
import logo from "../../img/Logo.png";
import { Box, Button } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  return (
    <StyledBox
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: 4,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          width: "100%",
          minWidth: "330px",
          maxWidth: "390px",
        }}
      >
        <StyledBox
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <img src={logo} alt="logo" />
          <Button
            variant="contained"
            sx={{
              bgcolor: "greyscale.grey3",
              "&:hover": { bgcolor: "greyscale.grey2" },
            }}
            onClick={() => history.push("/")}
          >
            Voltar
          </Button>
        </StyledBox>
        <RegisterForm />
      </Box>
    </StyledBox>
  );
}

export default Register;
