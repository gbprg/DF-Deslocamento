import { api } from "@/api";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography, Alert, Snackbar } from "@mui/material";
import TableClient from "@/components/TableClient";
import Link from "next/link";

export default function Client() {
  const [data, setData] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const getClients = async () => {
    try {
      const response = await api.get("/Cliente");
      setData(response.data);
    } catch (error) {
      alert("Error ao carregar");
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  const handleDeleteClient = async (id: number) => {
    const data = { id: id };
    try {
      await api.delete(`/Cliente/${id}`, {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
        method: "DELETE",
      });
      getClients();

      console.log(id);
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
          Cliente
        </Typography>
        <Link href="/client/create">
          <Button variant="contained" color="secondary">
            Cadastrar
          </Button>
        </Link>
      </Box>
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} sm={12} xs={12} mb={2}>
          <TableClient clients={data} onDelete={handleDeleteClient} />
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
  );
}
