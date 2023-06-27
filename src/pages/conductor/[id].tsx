import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

interface FormProps {
  id: number;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

export default function FormRegisterConductor() {
  const router = useRouter();
  const { id: queryId } = router.query;

  const [formData, setFormData] = useState<FormProps>({
    id: 0,
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

  const getConductor = async () => {
    try {
      const response = await api.get(`/Condutor/${queryId}`);
      const { id, categoriaHabilitacao, vencimentoHabilitacao } = response.data;
      setFormData({
        id,
        categoriaHabilitacao,
        vencimentoHabilitacao,
      });
    } catch (error) {
      alert("Error ao atualizar");
    }
  };

  const handleSubmitConductor = async (event: FormEvent) => {
    event?.preventDefault();

    try {
      await api.put(`/Condutor/${queryId}`, formData).then(() => {
        router.push("/conductor");
      });
    } catch (error) {
      alert("Error ao editar");
    }
  };

  useEffect(() => {
    if (queryId) {
      getConductor();
    }
  }, [queryId]);

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
          value={formData.categoriaHabilitacao}
          onChange={handleChangeConductor}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="logradouro"
          name="logradouro"
          label="Logradouro"
          type="text"
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
          Editar
        </Button>
      </div>
    </Box>
  );
}
