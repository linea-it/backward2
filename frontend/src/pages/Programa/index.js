import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Programa() {
  const classes = styles();
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | Programa';

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Programa
            </Typography>
            <br />
            <br />

            <Typography variant="h5" color="primary">
              <strong>Objetivo:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              Introduzir o participante a conceitos básicos de fluxos de
              trabalhos no git e algumas estratégias de branches que facilitam o
              desenvolvimento colaborativo, apresentando técnicas que visam um
              desenvolvimento mais ágil e descomplicado.
            </Typography>
            <br />
            <Typography variant="h5" color="primary">
              <strong>Pré-requisitos:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <ul>
                <li>
                  Ter noções básicas de git (Branch, Commit, Push e Pull).
                </li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>ATENÇÃO:</strong> Curso será ministrado no sistema Linux e
              todos os comandos serão para esta plataforma.
            </Typography>
            <br />
            <Typography variant="h5" color="primary">
              <strong>Ementa:</strong>
            </Typography>
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <ol>
                <li>Ciclo de desenvolvimento</li>
                <li>Git Workflows</li>
                <li>Exemplos de fluxos de trabalho</li>
                <li>Gitflow</li>
                <li>Vantagens e Desvantagens</li>
                <li>Branches de suporte</li>
                <li>
                  Exemplo prático implementando um fluxo de trabalho no Github
                </li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Programa;
