import { Alert, Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import Link from "next/link";
import TableDisplacement from "../../components/TableDisplacement";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function Displacement() {
  const [displacement, setDisplacement] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const getDisplacement = async () => {
    try {
      const response = await api.get("/Deslocamento");
      setDisplacement(response.data);
    } catch (error) {
      alert("Error ao carregar");
    }
  };

  useEffect(() => {
    getDisplacement();
  }, []);

  const handleDeleteDisplacement = async (id: number) => {
    const data = { id: id };
    try {
      await api.delete(`/Deslocamento/${id}`, {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
        method: "DELETE",
      });
      getDisplacement();

      console.log(id);
    } catch (error) {
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Box>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography mt={2} variant="h5" color="white">
            Inicio
          </Typography>
        </Link>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography mt={2} mb={2} variant="h4" color="white" fontWeight={700}>
            Deslocamento
          </Typography>
          <Link href="/displacement/create">
            <Button variant="contained" color="secondary">
              Cadastrar
            </Button>
          </Link>
        </Box>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TableDisplacement
              displacements={displacement}
              onDelete={handleDeleteDisplacement}
            />
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Error ao excluir cliente
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
