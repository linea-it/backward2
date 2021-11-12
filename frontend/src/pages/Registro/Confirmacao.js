import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';

import styles from './styles';

function Confirmacao() {
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | Registro - Sucesso';

  const classes = styles();

  return (
    <Container>
      <Grid item xs={12}>
        <div className={classes.registrationSuccess}>
          <Typography
            variant="h2"
            color="success"
            gutterBottom
            className={classes.success}
          >
            Sucesso!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.success}
          >
            Agradecemos pela inscrição! Acompanhe nossas atualizações:
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.success}
          >
            Site:{' '}
            <a href="https://www.linea.gov.br" target="_blank" rel="noreferrer">
              www.linea.gov.br
            </a>
            <br />
            Twitter:{' '}
            <a
              href="https://twitter.com/LIneA_mcti"
              target="_blank"
              rel="noreferrer"
            >
              www.twitter.com/LIneA_mcti
            </a>
            <br />
            Instagram:{' '}
            <a
              href="https://www.instagram.com/linea_mcti"
              target="_blank"
              rel="noreferrer"
            >
              www.instagram.com/linea_mcti
            </a>
            <br />
            YouTube:{' '}
            <a
              href="https://www.youtube.com/user/lineamct"
              target="_blank"
              rel="noreferrer"
            >
              www.youtube.com/user/lineamct
            </a>
            <br />
            Facebook:{' '}
            <a
              href="https://www.facebook.com/linea.mcti"
              target="_blank"
              rel="noreferrer"
            >
              www.facebook.com/linea.mcti
            </a>
            <br />
            Newsletter:{' '}
            <a
              href="https://linea.us3.list-manage.com/subscribe?u=ca2550b009d31a3cdb4fdab2d&id=31796233d4 "
              target="_blank"
              rel="noreferrer"
            >
              www.linea.us3.list-manage.com/subscribe?u=ca2550b009d31a3cdb4fdab2d&id=31796233d4
            </a>
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {' '}
            <Link color="inherit" className={classes.returnPage} href="/">
              Voltar para o início
            </Link>
          </Typography>
        </div>
      </Grid>
    </Container>
  );
}

export default Confirmacao;
