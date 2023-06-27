import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { api } from "../../api";

interface FormProps {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

export default function FormRegisterConductor() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormProps>({
    nome: "",
    numeroHabilitacao: "",
    categoriaHabilitacao: "",
    vencimentoHabilitacao: "",
  });

  const handleChangeConductor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitConductor = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.post("/Condutor", formData);
      router.push("/conductor");
    } catch (error) {
      alert("Error ao cadastrar");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50%" },
        width: "100%",
        height: "100vh",
        background: "#fff",
        borderRadius: "10px",
      }}
      noValidate
      autoComplete="off"
      mb={2}
      onSubmit={handleSubmitConductor}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" color="black" padding={1}>
            Inicio
          </Typography>
        </Link>
        <Link href="/conductor" style={{ textDecoration: "none" }}>
          <Typography variant="h5" color="black" padding={1}>
            Voltar
          </Typography>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <TextField
          id="nome"
          name="nome"
          label="Nome"
          type="text"
          value={formData.nome}
          onChange={handleChangeConductor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="numeroHabilitacao"
          name="numeroHabilitacao"
          label="Numero da Habilitação"
          type="number"
          value={formData.numeroHabilitacao}
          onChange={handleChangeConductor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="categoriaHabilitacao"
          name="categoriaHabilitacao"
          label="Categoria da Habilitação"
          type="text"
          value={formData.categoriaHabilitacao}
          onChange={handleChangeConductor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="vencimentoHabilitacao"
          name="vencimentoHabilitacao"
          label="Vencimento da Habilitação"
          type="date"
          value={formData.vencimentoHabilitacao}
          onChange={handleChangeConductor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Cadastrar
        </Button>
      </div>
    </Box>
  );
}
