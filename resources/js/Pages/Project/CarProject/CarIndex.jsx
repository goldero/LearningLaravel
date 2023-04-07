import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

export default function CarIndex({ cars }) {
    const { t, i18n } = useTranslation();

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("cars.brand")}</TableCell>
                            <TableCell align="right">
                                {t("cars.model")}
                            </TableCell>
                            <TableCell align="right">
                                {t("cars.type")}
                            </TableCell>
                            <TableCell align="right">
                                {t("cars.doors")}
                            </TableCell>
                            <TableCell align="right">
                                {t("cars.year")}
                            </TableCell>
                            <TableCell align="right">
                                {t("cars.fuel")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.brand}
                                </TableCell>
                                <TableCell align="right">{row.model}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.doors}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                                <TableCell align="right">{row.fuel}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
