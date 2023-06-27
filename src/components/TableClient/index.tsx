import styled from "@emotion/styled";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { theme } from "../../theme";
import { useRouter } from "next/router";

interface ClientInterface {
  id: number;
  numeroDocumento: number;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
}

interface ClientProps {
  clients: ClientInterface[];
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

export default function TableClient({ clients, onDelete }: ClientProps) {
  const router = useRouter();

  function handleDeleteClient(id: number) {
    onDelete(id);
  }

  function handleEditClient(id: number) {
    router.push(`client/${id}`);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">id</StyledTableCell>
            <StyledTableCell theme="" align="left">
              Numero de documento
            </StyledTableCell>
            <StyledTableCell align="left">Tipo de documento</StyledTableCell>
            <StyledTableCell align="left">Nome</StyledTableCell>
            <StyledTableCell align="left">Logradouro</StyledTableCell>
            <StyledTableCell align="left">Numero</StyledTableCell>
            <StyledTableCell align="left">Bairro</StyledTableCell>
            <StyledTableCell align="left">Cidade</StyledTableCell>
            <StyledTableCell align="left">Uf</StyledTableCell>
            <StyledTableCell />
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <StyledTableCell align="left">{client.id}</StyledTableCell>
              <StyledTableCell align="left">
                {client.numeroDocumento}
              </StyledTableCell>
              <StyledTableCell align="left">
                {client.tipoDocumento}
              </StyledTableCell>
              <StyledTableCell align="left">{client.nome}</StyledTableCell>
              <StyledTableCell align="left">
                {client.logradouro}
              </StyledTableCell>
              <StyledTableCell align="left">{client.numero}</StyledTableCell>
              <StyledTableCell align="left">{client.bairro}</StyledTableCell>
              <StyledTableCell align="left">{client.cidade}</StyledTableCell>
              <StyledTableCell align="left">{client.uf}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDeleteClient(client.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEditClient(client.id)}>
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
