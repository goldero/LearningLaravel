import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, router } from "@inertiajs/react";

function Pindex() {
    const proyectos = ["proyecto gatos", "proyecto de perros", "carProject"];
    function handleClick(e) {
        e.preventDefault();
        router.visit("projects/car");
    }

    return (
        <main className="bg-gradient-to-b from-cyan-300 to-blue-400 h-screen flex justify-center items-center text-center">
            <article>
                <Grid container>
                    {proyectos.map((proyecto) => (
                        <Card
                            sx={{ minWidth: 275 }}
                            key={proyecto}
                            onClick={(e) => handleClick(e)}
                        >
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {proyecto}
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary"
                                >
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </article>
        </main>
    );
}

export default Pindex;
