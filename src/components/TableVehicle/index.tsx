import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { theme } from "../../theme";
import { useRouter } from "next/router";

interface VehicleType {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

interface VehicleProps {
  vehicle: VehicleType[];
  onDelete: (id: number) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 500,
  },
}));

export default function TableVehicle({ vehicle, onDelete }: VehicleProps) {
  const router = useRouter();

  function handleDeleteVehicle(id: number) {
    onDelete(id);
  }

  function handleEditVehicle(id: number) {
    router.push(`vehicle/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">Placa</StyledTableCell>
            <StyledTableCell align="left">Modelo do carro</StyledTableCell>
            <StyledTableCell align="left">Ano de fabricação</StyledTableCell>
            <StyledTableCell align="left">KM Atual</StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicle.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.placa}</StyledTableCell>
              <StyledTableCell align="left">{row.marcaModelo}</StyledTableCell>
              <StyledTableCell align="left">
                {row.anoFabricacao}
              </StyledTableCell>
              <StyledTableCell align="left">{row.kmAtual}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteVehicle(row.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEditVehicle(row.id)}>
                  <BorderColorIcon
                    style={{ color: theme.palette.common.black }}
                  />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
