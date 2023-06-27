import { Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import Link from "next/link";
import TableConductor from "../../components/TableConductor";
import { useEffect, useState } from "react";
import { api } from "../../api";

export default function Conductor() {
  const [conductors, setConductors] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const getConductors = async () => {
    try {
      const response = await api.get("/Condutor");
      setConductors(response.data);
    } catch (error) {
      alert("Error ao carregar");
    }
  };

  useEffect(() => {
    getConductors();
  }, []);

  const handleDeleteConductors = async (id: number) => {
    const data = { id: id };
    try {
      await api.delete(`/Condutor/${id}`, {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
        method: "DELETE",
      });
      getConductors();
    } catch (error) {
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Box>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography mt={2} variant="h5" color="white">
            Início
          </Typography>
        </Link>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography mt={2} mb={2} variant="h4" color="white" fontWeight={700}>
            Condutor
          </Typography>
          <Link href="/conductor/create">
            <Button variant="contained" color="secondary">
              Cadastrar
            </Button>
          </Link>
        </Box>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TableConductor
              conductors={conductors}
              onDelete={handleDeleteConductors}
            />
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
            ></Snackbar>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
