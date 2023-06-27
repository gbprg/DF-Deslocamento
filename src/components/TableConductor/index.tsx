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

interface ConductorInterface {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

interface ConductorProps {
  conductors: ConductorInterface[];
  onDelete: (id: number) => void;
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    fontWeight: 500,
  },
}));

export default function TableConductor({
  conductors,
  onDelete,
}: ConductorProps) {
  const router = useRouter();

  function handleDeleteConductors(id: number) {
    onDelete(id);
  }

  function handleEditConductor(id: number) {
    router.push(`conductor/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">id</StyledTableCell>
            <StyledTableCell align="left">Nome</StyledTableCell>
            <StyledTableCell align="left">
              Numero da Habilitação
            </StyledTableCell>
            <StyledTableCell align="left">
              Categoria da Habilitação
            </StyledTableCell>
            <StyledTableCell align="left">
              Vencimento da Habilitação
            </StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {conductors.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.nome}</StyledTableCell>
              <StyledTableCell align="left">
                {row.numeroHabilitacao}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.catergoriaHabilitacao}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.vencimentoHabilitacao}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteConductors(row.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEditConductor(row.id)}>
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
