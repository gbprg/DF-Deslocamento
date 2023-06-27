import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";

export default function Panel() {
  return (
    <Box>
      <Grid mt={1} container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={6}>
          <Link href="/client">
            <Button variant="contained" color="secondary" fullWidth>
              Cliente
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Link href="/conductor">
            <Button variant="contained" color="secondary" fullWidth>
              Condutor
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Link href="/displacement">
            <Button variant="contained" color="secondary" fullWidth>
              Deslocamento
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Link href="/vehicle">
            <Button variant="contained" color="secondary" fullWidth>
              Veiculo
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
