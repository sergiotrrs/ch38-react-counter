import { useEffect, useState } from "react";
import { CounterButton } from "./counterButton";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

let maxValue = 0;

export const Counter = () => {
  console.log("Soy el componente Counter y me renderizo");

  const [counterValue, setCounter] = useState(1);

  /**
   * Permite realizar efectos secundarios en componentes de función.
   * Los efectos secundarios pueden ser operaciones asíncronas,
   * suscripciones a eventos, manipulación del DOM, entre otros
   *
   * [] = dependencias
   * []: vacío, solo se renderiza una sola vez
   */
  useEffect(() => {
    const mensajeEnConsola = () => {
      console.log("EStoy dentro de UseEffect");
    };
    mensajeEnConsola();
  }, [maxValue]);

  const incrementHandle = () => {
    setCounter(counterValue + 1);
    if (counterValue >= 10) maxValue = 10;
  };

  const decrementHandle = () => {
    setCounter(counterValue - 1);
  };

  const resetHandle = () => {
    setCounter(1);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={4}>
          <Box
            component="article"
            alignItems="center"
            gap={4}
            p={2}
            m={2}
            sx={{ border: "2px solid grey" }}
          >
            <Typography variant="h1" component="p">
              {counterValue}
            </Typography>

            <CounterButton buttonHandle={incrementHandle}>+</CounterButton>
            <CounterButton buttonHandle={decrementHandle}>-</CounterButton>
            <CounterButton buttonHandle={resetHandle}>Reset</CounterButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

/*
   useState

Renderización  useState()   counterValue   setCounter()  
 1                1              1           ( counterValue + 1)
 2               ---             2           ( counterValue + 1)
 3               ---             3           (  0 )
 4               ---             0           ( counterValue - 1)
 5               ---            -1        

*/
