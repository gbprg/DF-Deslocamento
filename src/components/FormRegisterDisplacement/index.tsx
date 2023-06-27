import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { api } from "../../api";

interface FormProps {
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

  const [formData, setFormData] = useState<FormProps>({
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

  const handleSubmitDisplacement = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.post("/Deslocamento", formData);
      router.push("/displacement");
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
          id="kmInicial"
          name="kmInicial"
          label="km Inicial"
          type="number"
          value={formData.kmInicial}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="inicioDeslocamento"
          name="inicioDeslocamento"
          label="Inicio do Deslocamento"
          type="date"
          value={formData.inicioDeslocamento}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="checkList"
          name="checkList"
          label="Check List"
          type="text"
          value={formData.checkList}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="motivo"
          name="motivo"
          label="Motivo"
          type="text"
          value={formData.motivo}
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
        <TextField
          id="idCondutor"
          name="idCondutor"
          label="ID do Condutor"
          type="number"
          value={formData.idCondutor}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="idVeiculo"
          name="idVeiculo"
          label="ID do Veiculo"
          type="number"
          value={formData.idVeiculo}
          onChange={handleChangeDisplacement}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="idCliente"
          name="idCliente"
          label="ID do Cliente"
          type="number"
          value={formData.idCliente}
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
          Cadastrar
        </Button>
      </div>
    </Box>
  );
}
