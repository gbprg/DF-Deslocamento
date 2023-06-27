import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../api";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

interface FormProps {
  id: number;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

export default function FormRegisterVehicle() {
  const router = useRouter();
  const { id: queryId } = router.query;

  const [formData, setFormData] = useState<FormProps>({
    id: 0,
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

  const getVehicle = async () => {
    try {
      const response = await api.get(`/Veiculo/${queryId}`);
      const { id, marcaModelo, anoFabricacao, kmAtual } = response.data;
      setFormData({
        id,
        marcaModelo,
        anoFabricacao,
        kmAtual,
      });
    } catch (error) {
      alert("Error ao carregar");
    }
  };

  const handleSubmitVehicle = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`/Veiculo/${queryId}`, formData).then(() => {
        router.push("/vehicle");
      });
    } catch (error) {
      alert("Error ao editar");
    }
  };

  useEffect(() => {
    if (queryId) {
      getVehicle();
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
          label="Ano da Fabricricação"
          type="text"
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
          label="km Atual"
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
          Editar
        </Button>
      </div>
    </Box>
  );
}
