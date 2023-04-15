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
        <main className=" text-center min-h-screen flex items-center justify-center flex-row">
            <article className=" m-10 flex flex-row">
                <Card className="max-w-md m-5" elevation={6}>
                    <CardHeader
                        title={`Coche ${car[0].id}`}
                        /* className="text-center" */
                    ></CardHeader>
                    <CardMedia /* Foto de coche :D */
                        component="img"
                        image="/storage/photos/noCar.png"
                        alt={`${car[0].brand} ${car[0].model}`}
                    />
                </Card>
            </article>
            <article className=" m-10 flex-column">
                <Paper className="m-2 px-5">
                    <h2 className="font-bold">Marca:</h2>
                    <p>{car[0].brand}</p>
                </Paper>
                <Paper className="m-2 px-5">
                    <h2 className="font-bold">Modelo:</h2>
                    <p>{car[0].model}</p>
                </Paper>
                <Paper className="m-2 px-5">
                    <h2 className="font-bold">Fecha:</h2>
                    <p>{car[0].year}</p>
                </Paper>
                <Paper className="m-2 px-5">
                    <h2 className="font-bold">Puertas:</h2>
                    <p>{car[0].doors}</p>
                </Paper>
                <Paper className="m-2 px-5">
                    <h2 className="font-bold">Motor:</h2>
                    <p>{car[0].fuel}</p>
                </Paper>
            </article>
        </main>
    );
}
