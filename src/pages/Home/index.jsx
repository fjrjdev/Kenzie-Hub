import React, { useState, useEffect } from "react";
import { Button, Typography, Skeleton } from "@mui/material";
import { useHistory } from "react-router-dom";

import logo from "../../img/Logo.png";
import { StyledBox } from "../../styles";
import { ApiData } from "../../services/api";
import TechBox from "../../components/TechBox";
import TechList from "../../components/TechList";

function Home() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techList, setTechList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem("id");
    setLoading(true);
    ApiData.get(`/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [techList]);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <StyledBox
      sx={{
        bgcolor: "greyscale.grey4",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: 1,
        alignItems: "center",
        position: "sticky",
      }}
    >
      <StyledBox
        sx={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          borderBottom: "0.1px solid #868E96",
          padding: "2% 0",
        }}
      >
        <img src={logo} alt="logo" />
        <Button
          name="Sair"
          variant="contained"
          type="button"
          aria-label="Sair"
          sx={{
            bgcolor: "greyscale.grey3",
            "&:hover": { bgcolor: "greyscale.grey2" },
          }}
          onClick={logout}
        >
          Sair
        </Button>
      </StyledBox>
      <StyledBox
        sx={{
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },

          width: "100%",
          height: "30%",
          bgcolor: "grey",
          alignItems: { xs: "flex-start", sm: "center" },
          borderBottom: "0.1px solid #868E96",
          padding: "2% 0",
        }}
      >
        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography variant="body1" sx={{ color: "greyscale.grey0" }}>
            Olá, {user.name}
          </Typography>
        )}

        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <Typography variant="body2" sx={{ color: "greyscale.grey0" }}>
            {user.course_module}
          </Typography>
        )}
      </StyledBox>
      <StyledBox
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <TechBox user={user} setTechList={setTechList} />
        )}

        {loading ? (
          <Skeleton width="100%" />
        ) : (
          <TechList user={user} setTechList={setTechList} />
        )}
      </StyledBox>
    </StyledBox>
  );
}

export default Home;
