import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

export default function CarShow({ car }) {
    const { t, i18n } = useTranslation();
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        "&:hover": {
            backgroundColor: "#C0C0C0 !important",
            cursor: "pointer", // aquí se establece el color de fondo del hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));
    /* Quiero hacer una carta que tenga una imagen del coche y que al desplegar, enseñe una tabla con información (marca tipo y tal) */
    return (
        <div className="flex items-center flex-col">
            <p>hola soy el show del coche: {car[0].id}</p>
            <Card sx={{ maxWidth: 500 }}>
                <CardHeader title={`Coche número ${car[0].id}`}></CardHeader>
                <div className="flex items-center flex-col">
                    <TableContainer
                        component={Paper}
                        className="max-w-fit my-4"
                    >
                        <Table
                            aria-label="simple table"
                            className="self-center max-w-xs"
                        >
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>
                                        {t("cars.brand")}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {t("cars.model")}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {t("cars.type")}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {t("cars.doors")}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {t("cars.year")}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {t("cars.fuel")}
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {car.map((row) => (
                                    <StyledTableRow
                                        hover
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.brand}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.model}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.type}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.doors}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.year}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.fuel}
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <CardMedia /* Foto de coche :D */
                    component="img"
                    height="194"
                    image="/storage/photos/noCar.png"
                    alt={`${car[0].brand} ${car[0].model}`}
                />
                {/* Tabla de coche */}
            </Card>
        </div>
    );
}
