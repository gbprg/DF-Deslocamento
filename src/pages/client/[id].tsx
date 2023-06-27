import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api";
import { useRouter } from "next/router";

interface FormProps {
  id: number;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export default function FormRegisterClient() {
  const router = useRouter();
  const { id: queryId } = router.query;

  const [formData, setFormData] = useState<FormProps>({
    id: 0,
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const handleChangeClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getClient = async () => {
    try {
      const response = await api.get(`/Cliente/${queryId}`);
      const { id, nome, logradouro, numero, bairro, cidade, uf } =
        response.data;
      setFormData({
        id,
        nome,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
      });
    } catch (error) {
      alert("Error ao atualizar");
    }
  };

  const handleSubmitClient = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`/Cliente/${queryId}`, formData).then(() => {
        router.push("/client");
      });
    } catch (error) {
      alert("Error ao cadastrar");
    }
  };

  useEffect(() => {
    if (queryId) {
      getClient();
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
      onSubmit={handleSubmitClient}
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
        <Link href="/client" style={{ textDecoration: "none" }}>
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
          onChange={handleChangeClient}
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
          value={formData.logradouro}
          onChange={handleChangeClient}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="numero"
          name="numero"
          label="Número"
          type="number"
          value={formData.numero}
          onChange={handleChangeClient}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="bairro"
          name="bairro"
          label="Bairro"
          type="text"
          value={formData.bairro}
          onChange={handleChangeClient}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="cidade"
          name="cidade"
          label="Cidade"
          type="text"
          value={formData.cidade}
          onChange={handleChangeClient}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="uf"
          name="uf"
          label="UF"
          type="text"
          value={formData.uf}
          onChange={handleChangeClient}
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
