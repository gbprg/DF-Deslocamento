import { Box, Typography } from "@mui/material";
import FormRegisterClient from "../../components/FormRegisterClient";

export default function CreateClient() {
  return (
    <Box>
      <Typography mt={2} mb={2} variant="h3" color="white" fontWeight={700}>
        Cadastrar novo Cliente
      </Typography>
      <Box>
        <FormRegisterClient />
      </Box>
    </Box>
  );
}
