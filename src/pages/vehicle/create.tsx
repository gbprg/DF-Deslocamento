import { Box, Typography } from "@mui/material";
import FormRegisterVehicle from "../../components/FormRegisterVehicle";

export default function CreateVehicle() {
  return (
    <Box>
      <Typography mt={2} mb={2} variant="h3" color="white" fontWeight={700}>
        Cadastrar novo Veiculo
      </Typography>
      <Box>
        <FormRegisterVehicle />
      </Box>
    </Box>
  );
}
