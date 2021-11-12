/* eslint-disable max-len */
import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import { YouTube, Twitter, GitHub } from '@material-ui/icons';
import styles from './styles';

function NotFound() {
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | 404: Página Não Encontrada';

  const handlerClick = (socialMedia) => {
    let uri = '';
    switch (socialMedia) {
      case 'YouTube':
        uri = 'https://www.youtube.com/user/lineamcti';
        break;
      case 'Twitter':
        uri = 'https://twitter.com/LIneA_mcti';
        break;
      case 'GitHub':
        uri = 'https://github.com/linea-it/dri';
        break;
      default:
        uri = 'https://www.youtube.com/user/lineamcti';
    }
    window.open(uri, '_blank');
  };

  const classes = styles();
  return (
    <Container>
      <Grid item xs={12}>
        <div className={classes.notfound}>
          <Typography variant="h1" className={classes.title}>
            404
          </Typography>
          <Typography variant="h2" className={classes.subTitle}>
            Oops! Nada foi encontrado
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            A página que você está procurando pode ter sido removida, teve seu
            nome alterado ou está temporariamente indisponível.{' '}
            <Link color="inherit" className={classes.returnPage} href="/">
              Retornar para o início
            </Link>
          </Typography>
          <IconButton
            className={classes.icon}
            onClick={() => {
              handlerClick('Youtube');
            }}
            color="inherit"
            aria-label="YouTube"
            component="span"
          >
            <YouTube />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => {
              handlerClick('Twitter');
            }}
            color="inherit"
            aria-label="Twitter"
            component="span"
          >
            <Twitter />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => {
              handlerClick('GitHub');
            }}
            color="inherit"
            aria-label="GitHub"
            component="span"
          >
            <GitHub />
          </IconButton>
        </div>
      </Grid>
    </Container>
  );
}

export default NotFound;
