import { Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledBox } from "../../styles";
import EditModal from "../EditModal";

const TechCard = ({ elem, handleRemoveTech, handleEditTech }) => {
  const { title, status } = elem;
  const [openM, setOpenM] = useState(false);

  const handleEventS = (elem) => {
    setOpenM(true);
  };

  return (
    <>
      <StyledBox
        component="div"
        sx={{
          justifyContent: "space-between",
          width: "95%",
          alignItems: "center",
          p: "0 2%",
          bgcolor: "greyscale.grey4",
          height: "50px",
          "&:hover": { bgcolor: "greyscale.grey2", cursor: "pointer" },
        }}
        onClick={(event) => handleEventS(elem)}
      >
        <Typography variant="body1">{title}</Typography>

        <Typography variant="body2" sx={{ color: "greyscale.grey1" }}>
          {status}
        </Typography>
      </StyledBox>
      <EditModal
        openM={openM}
        setOpenM={setOpenM}
        elem={elem}
        handleRemoveTech={handleRemoveTech}
        handleEditTech={handleEditTech}
      />
    </>
  );
};

export default TechCard;
