import { Box, Typography } from "@mui/material";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="100vh"
    >
      <Typography variant="h3" color="secondary" sx={{ textAlign: "center" }}>
        MEU PAINEL
      </Typography>
      <Panel />
    </Box>
  );
}
