import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ApiData } from "../../services/api";
import { useForm, useInput } from "lx-react-form";

const statusOptions = [
  {
    value: "Iniciante",
    label: "Iniciante",
  },
  {
    value: "Intermediário",
    label: "Intermediário",
  },
  {
    value: "Avançado",
    label: "Avançado",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "100%",
  bgcolor: "greyscale.grey3",
  border: "2px solid #000",
  boxShadow: 24,
};

const EditModal = ({
  openM,
  setOpenM,
  elem,
  handleRemoveTech,
  handleEditTech,
}) => {
  const handleCloseS = () => setOpenM(false);

  const editarTech = (data, id) => {
    const token = localStorage.getItem("token");
    ApiData.put(`/users/techs/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => handleEditTech(elem))
      .catch((error) => console.log(error))
      .finally(handleCloseS);
  };

  const deletarTech = (data) => {
    const token = localStorage.getItem("token");
    ApiData.delete(`/users/techs/${data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => handleRemoveTech(data))
      .catch((error) => console.log(error))
      .finally(handleCloseS);
  };

  const status = useInput({
    name: "status",
  });
  const form = useForm({
    formFields: [status],
    submitCallback: (formData) => {
      editarTech(formData, elem.id);
    },
  });

  return (
    <Modal open={openM} onClose={handleCloseS}>
      <Box sx={style}>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            backgroundColor: "greyscale.grey2",
            width: "100%",
            padding: "2% 4%",
          }}
        >
          <Typography id="modal-modal-title" variant="body1" component="h2">
            Cadastrar Tecnologia
          </Typography>
          <IconButton sx={{ borderRadius: 1 }} onClick={handleCloseS}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "4% 4%",
          }}
          onSubmit={form.handleSubmit}
        >
          <TextField
            fullWidth
            label="Nome da Tecnologia"
            disabled
            value={elem.title}
          />
          <TextField
            fullWidth
            label="Selecionar Status"
            select
            SelectProps={{
              native: true,
            }}
            {...status.inputProps}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <Box
            sx={{ gap: 2, display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ width: "65%", height: "40px", p: 3 }}
              type="submit"
            >
              Salvar alterações
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "25%",
                bgcolor: "greyscale.grey1",
                "&:hover": { bgcolor: "greyscale.grey2" },
              }}
              onClick={() => deletarTech(elem)}
            >
              Excluir
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
