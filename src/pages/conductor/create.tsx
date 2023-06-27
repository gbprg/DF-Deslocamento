import { Box, Typography } from "@mui/material";
import FormRegisterConductor from "../../components/FormRegisterConductor";

export default function CreateConductor() {
  return (
    <Box>
      <Typography mt={2} mb={2} variant="h3" color="white" fontWeight={700}>
        Cadastrar novo Condutor
      </Typography>
      <Box>
        <FormRegisterConductor />
      </Box>
    </Box>
  );
}
