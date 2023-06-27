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

interface DisplacementType {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

interface DisplacementProps {
  displacements: DisplacementType[];
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

export default function TableDisplacement({
  displacements,
  onDelete,
}: DisplacementProps) {
  const router = useRouter();

  function handleDeleteDisplacement(id: number) {
    onDelete(id);
  }

  function handleEditDisplacement(id: number) {
    router.push(`displacement/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">id</StyledTableCell>
            <StyledTableCell align="left">KM Inicial</StyledTableCell>
            <StyledTableCell align="left">KM Final</StyledTableCell>
            <StyledTableCell align="left">
              Inicio do deslocamento
            </StyledTableCell>
            <StyledTableCell align="left">Fim do deslocamento</StyledTableCell>
            <StyledTableCell align="left">Checklist</StyledTableCell>
            <StyledTableCell align="left">Motivo</StyledTableCell>
            <StyledTableCell align="left">Observação</StyledTableCell>
            <StyledTableCell align="left">ID do condutor</StyledTableCell>
            <StyledTableCell align="left">ID do veiculo</StyledTableCell>
            <StyledTableCell align="left">ID do cliente</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displacements.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.kmInicial}</StyledTableCell>
              <StyledTableCell align="left">{row.kmFinal}</StyledTableCell>
              <StyledTableCell align="left">
                {row.inicioDeslocamento}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.fimDeslocamento}
              </StyledTableCell>
              <StyledTableCell align="left">{row.checkList}</StyledTableCell>
              <StyledTableCell align="left">{row.motivo}</StyledTableCell>
              <StyledTableCell align="left">{row.observacao}</StyledTableCell>
              <StyledTableCell align="left">{row.idCondutor}</StyledTableCell>
              <StyledTableCell align="left">{row.idVeiculo}</StyledTableCell>
              <StyledTableCell align="left">{row.idCliente}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteDisplacement(row.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEditDisplacement(row.id)}>
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
