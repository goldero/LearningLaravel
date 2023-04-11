import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import { router } from "@inertiajs/react";
import { styled } from "@mui/material/styles";

export default function CarIndex({ cars }) {
    const { t, i18n } = useTranslation();
    const [page, setPage] = React.useState(cars.current_page);
    const handleChange = (event, value) => {
        setPage(value);
        router.visit(cars.links[value].url);
    };
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

    return (
        <div className="flex items-center flex-col">
            <TableContainer component={Paper} className="max-w-fit my-4">
                <Table
                    aria-label="simple table"
                    className="self-center max-w-xs"
                >
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>{t("cars.brand")}</StyledTableCell>
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
                        {cars.data.map((row) => (
                            <StyledTableRow
                                hover
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                                onClick={() => {
                                    router.visit(
                                        route("carShow", { id: row.id })
                                    );
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
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    count={10}
                    page={page}
                    onChange={handleChange}
                    className="flex justify-center mb-2
            "
                />
            </TableContainer>
        </div>
    );
}
