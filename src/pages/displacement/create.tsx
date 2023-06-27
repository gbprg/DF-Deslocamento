import { Box, Typography } from "@mui/material";
import FormRegisterDisplacement from "../../components/FormRegisterDisplacement";

export default function CreateDisplacement() {
  return (
    <Box>
      <Typography mt={2} mb={2} variant="h3" color="white" fontWeight={700}>
        Cadastrar novo Deslocamento
      </Typography>
      <Box>
        <FormRegisterDisplacement />
      </Box>
    </Box>
  );
}
