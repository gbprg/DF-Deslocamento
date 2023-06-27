import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

interface FormProps {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

export default function FormRegisterDisplacement() {
  const router = useRouter();
  const { id: queryId } = router.query;

  const [formData, setFormData] = useState<FormProps>({
    id: 0,
    kmInicial: 0,
    kmFinal: 0,
    inicioDeslocamento: "",
    fimDeslocamento: "",
    checkList: "",
    motivo: "",
    observacao: "",
    idCondutor: 0,
    idVeiculo: 0,
    idCliente: 0,
  });

  const handleChangeDisplacement = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getDisplacement = async () => {
    try {
      const response = await api.get(`/Deslocamento/${queryId}`);
      const {
        id,
        kmInicial,
        kmFinal,
        inicioDeslocamento,
        fimDeslocamento,
        checkList,
        motivo,
        observacao,
        idCondutor,
        idVeiculo,
        idCliente,
      } = response.data;
      setFormData({
        id,
        kmInicial,
        kmFinal,
        inicioDeslocamento,
        fimDeslocamento,
        checkList,
        motivo,
        observacao,
        idCondutor,
        idVeiculo,
        idCliente,
      });
    } catch (error) {
      alert("Error ao carregar");
    }
  };

  const handleSubmitDisplacement = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`/Deslocamento/${queryId}`, formData).then(() => {
        router.push("/displacement");
      });
    } catch (error) {
      alert("Error ao editar");
    }
  };

  useEffect(() => {
    if (queryId) {
      getDisplacement();
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
      onSubmit={handleSubmitDisplacement}
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
        <Link href="/displacement" style={{ textDecoration: "none" }}>
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
          id="kmFinal"
          name="kmFinal"
          label="km Inicial"
          type="number"
          value={formData.kmFinal}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="fimDeslocamento"
          name="fimDeslocamento"
          label="Fim do Deslocamento"
          type="text"
          value={formData.fimDeslocamento}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="observacao"
          name="observacao"
          label="Observação"
          type="text"
          value={formData.observacao}
          onChange={handleChangeDisplacement}
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
