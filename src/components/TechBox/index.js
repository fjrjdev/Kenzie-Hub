import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledBox } from "../../styles";
import AddIcon from "@mui/icons-material/Add";
import AddModal from "../AddModal";
import { toast } from "react-toastify";

const TechBox = ({ user, setTechList }) => {
  const [open, setOpen] = useState(false);
  const handleEvent = () => {
    setOpen(!false);
  };
  const addItemTech = (item) => {
    const newList = [...user.techs, item];
    setTechList(newList);
    toast.success("Technologia adicionada com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <StyledBox
      sx={{
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        margin: "3% 0",
      }}
    >
      <Typography>Tecnologias</Typography>
      <IconButton
        onClick={handleEvent}
        aria-label="add"
        sx={{ bgcolor: "greyscale.grey3", borderRadius: "4px" }}
      >
        <AddIcon />
      </IconButton>
      <AddModal open={open} setOpen={setOpen} addItemTech={addItemTech} />
    </StyledBox>
  );
};

export default TechBox;
