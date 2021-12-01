import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';
import styles from './styles';

function Registro() {
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | Registro';

  const classes = styles();

  return (
    <Container>
      <Grid item xs={12}>
        <div className={classes.registrationSuccess}>
          <Typography variant="h2" gutterBottom className={classes.error}>
            Inscrições Encerradas!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.error}
          >
            Entre no{' '}
            <Link
              className={classes.link}
              color="inherit"
              href="https://www.linea.gov.br/"
            >
              nosso site
            </Link>{' '}
            para ficar por dentro das novidades e outras edições.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            paragraph
            className={classes.error}
          >
            Contato: <a href="mailto:cde@linea.gov.br">cde@linea.gov.br</a>
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

export default Registro;
