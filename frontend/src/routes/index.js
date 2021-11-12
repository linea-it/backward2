import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Programa from '../pages/Programa';
import Registro from '../pages/Registro';
import Confirmacao from '../pages/Registro/Confirmacao';
import Informacoes from '../pages/Informacoes';
import Plots from '../pages/Plots';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useStyles from './styles';

export default function Routes() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programa" component={Programa} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/registro/confirmacao/" component={Confirmacao} />
          <Route exact path="/informacoes-adicionais" component={Informacoes} />
          <Route isPrivate exact path="/plots" component={Plots} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
