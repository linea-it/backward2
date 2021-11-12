import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

function Informacoes() {
  const classes = useStyles();
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | Informações Adicionais';

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
              gutterBottom
            >
              Informações Adicionais
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O LIneA anuncia o curso de GitHub para interessados em{' '}
              <strong>todos os estágios de carreira</strong> que queiram
              aprender a ferramenta.
            </Typography>

            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O período de inscrição acontece até{' '}
              <strong>às 18h do dia 29 de novembro de 2021</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O curso é <strong>gratuito</strong> e <strong>online</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Serão emitidos certificados para os participantes do curso.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Contato: <a href="mailto:cde@linea.gov.br">cde@linea.gov.br</a>
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O LIneA é um instituto de ciência e tecnologia privado cuja missão
              é viabilizar a participação de pesquisadores e estudantes em
              colaborações internacionais; apoiar centros emergentes, fornecer
              acesso a acervos de dados astronômicos e a uma infraestrutura de
              processamento intensivo de dados, e desenvolver soluções para
              problemas de big data nas áreas de astronomia e cosmologia.
              Atualmente as atividades do LIneA são apoiadas pela FINEP e pelo
              INCT do e-Universo.
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Informacoes;
