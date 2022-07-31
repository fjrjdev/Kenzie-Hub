import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, useInput } from "lx-react-form";
import { ApiData } from "../../services/api";
import { toast } from "react-toastify";

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

const AddModal = ({ open, setOpen, addItemTech }) => {
  const handleClose = () => setOpen(false);

  const title = useInput({
    name: "title",
  });
  const status = useInput({
    name: "status",
  });
  const form = useForm({
    formFields: [title, status],
    submitCallback: (formData) => {
      cadastrarTech(formData);
    },
  });

  const cadastrarTech = (data) => {
    const token = localStorage.getItem("token");
    ApiData.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => addItemTech(response.data))
      .catch((error) =>
        toast.error(
          "Você já tem essa tecnologia criada, você só pode editar ou apagar ela! ",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )
      )
      .finally(handleClose);
  };
  return (
    <Modal open={open} onClose={handleClose}>
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
          <IconButton sx={{ borderRadius: 1 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          component="form"
          onSubmit={form.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "4% 4%",
          }}
        >
          <TextField
            fullWidth
            label="Nome"
            {...title.inputProps}
            helperText={title.error}
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
          <Button variant="contained" type="submit">
            Cadastrar Tecnologia
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddModal;
