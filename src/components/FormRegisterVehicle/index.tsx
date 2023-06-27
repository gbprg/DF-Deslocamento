import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { api } from "../../api";

interface FormProps {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

export default function FormRegisterVehicle() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormProps>({
    id: 0,
    placa: "",
    marcaModelo: "",
    anoFabricacao: 0,
    kmAtual: 0,
  });

  const handleChangeVehicle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitVehicle = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.post("/Veiculo", formData);
      router.push("/vehicle");
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
      onSubmit={handleSubmitVehicle}
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
        <Link href="/vehicle" style={{ textDecoration: "none" }}>
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
          id="placa"
          name="placa"
          label="Placa"
          type="text"
          value={formData.placa}
          onChange={handleChangeVehicle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="marcaModelo"
          name="marcaModelo"
          label="Marca e Modelo"
          type="text"
          value={formData.marcaModelo}
          onChange={handleChangeVehicle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="anoFabricacao"
          name="anoFabricacao"
          label="Ano de fabricação"
          type="number"
          value={formData.anoFabricacao}
          onChange={handleChangeVehicle}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
        <TextField
          id="kmAtual"
          name="kmAtual"
          label="KM Atual"
          type="number"
          value={formData.kmAtual}
          onChange={handleChangeVehicle}
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
