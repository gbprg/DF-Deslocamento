import { Alert, Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import Link from "next/link";
import TableVehicle from "../../components/TableVehicle";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function Vehicle() {
  const [vehicle, setVehicle] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const getVehicle = async () => {
    try {
      const response = await api.get("/Veiculo");
      setVehicle(response.data);
    } catch (error) {
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const handleDeleteVehicle = async (id: number) => {
    const data = { id: id };
    try {
      await api.delete(`/Veiculo/${id}`, {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
        method: "DELETE",
      });
      getVehicle();
    } catch (error) {
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Typography mt={2} variant="h5" color="white">
          Inicio
        </Typography>
      </Link>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography mt={2} mb={2} variant="h4" color="white" fontWeight={700}>
          Veiculo
        </Typography>
        <Link href="/vehicle/create">
          <Button variant="contained" color="secondary">
            Cadastrar
          </Button>
        </Link>
      </Box>
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TableVehicle vehicle={vehicle} onDelete={handleDeleteVehicle} />
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="error">
              Error ao excluir
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Box>
  );
}
