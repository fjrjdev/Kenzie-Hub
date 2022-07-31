import React from "react";
import { StyledBox } from "../../styles";
import TechCard from "../TechCard";
import { toast } from "react-toastify";

const TechList = ({ user, setTechList }) => {
  const techs = [...user.techs];

  const handleRemoveTech = (elem) => {
    const newlist = techs.filter((item) => elem !== item);
    setTechList(newlist);
    toast.success("Technologia removida com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleEditTech = (elem) => {
    const newList = [...techs, elem];
    setTechList(newList);
    toast.success("Technologia editada com sucesso", {
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
        bgcolor: "greyscale.grey3",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "2% 0",
        gap: 2,
      }}
    >
      {techs.map((elem) => {
        return (
          <TechCard
            key={elem.id}
            elem={elem}
            handleRemoveTech={handleRemoveTech}
            handleEditTech={handleEditTech}
          />
        );
      })}
    </StyledBox>
  );
};

export default TechList;
