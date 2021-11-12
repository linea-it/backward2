import React, { useRef, useState } from 'react';
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from '@material-ui/core';

import { Alert, AlertTitle, Autocomplete } from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';
import { postSubscription } from '../../services/api';

function Registro() {
  // Change dynamically the page title:
  document.title = 'Curso Git Avançado | Registro';

  const classes = styles();
  const formRef = useRef();
  const recaptchaRef = useRef();

  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [submitEnabled, setSubmitEnabled] = useState(!recaptchaKey);
  const [isLoading, setIsLoading] = useState(false);

  const states = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];

  const handleClose = () => setOpenFormFeedback(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage({});
    setIsLoading(true);

    if (submitEnabled) {
      const name = formRef.current.name.value;
      const email = formRef.current.email.value;
      const institute = formRef.current.institute.value;
      const state = formRef.current.state.value.split(' (')[0];

      postSubscription({
        name,
        email,
        institute,
        state,
      })
        .then(() => {
          setOpenFormFeedback(true);
          // Reseting form:
          formRef.current.reset();

          // Forcing the reCAPTCHA to reset:
          recaptchaRef.current.reset();

          // Forcing the State autocomplete to reset:
          formRef.current.state.parentElement.querySelector('button').click();

          setIsLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.response.data);
        });
    }
  };

  const onRecaptchaChange = (humanKey) => {
    if (humanKey) {
      setSubmitEnabled(true);
    }
  };

  return (
    <div>
      <Container align="center">
        <Grid item xs={12}>
          <Grid item xs={11} md={6} className={classes.grid}>
            <Typography variant="h3" align="center" color="primary">
              Registro
            </Typography>
            <br />
            <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.textFields}>
                <TextField
                  required
                  id="name"
                  type="text"
                  variant="outlined"
                  label="Nome completo"
                  name="name"
                  fullWidth
                  size="small"
                  error={'name' in errorMessage}
                  helperText={
                    'name' in errorMessage ? errorMessage.name[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <TextField
                  required
                  id="email"
                  type="email"
                  variant="outlined"
                  label="E-mail"
                  name="email"
                  fullWidth
                  size="small"
                  error={'email' in errorMessage}
                  helperText={
                    'email' in errorMessage ? errorMessage.email[0] : ''
                  }
                />
              </div>
              <div className={classes.textFields}>
                <TextField
                  required
                  id="institute"
                  type="text"
                  variant="outlined"
                  label="Instituto"
                  name="institute"
                  placeholder="Utilize apenas siglas maiúsculas"
                  fullWidth
                  size="small"
                  error={'institute' in errorMessage}
                  helperText={
                    'institute' in errorMessage ? errorMessage.institute[0] : ''
                  }
                />
              </div>

              <div className={classes.textFields}>
                <Autocomplete
                  id="state"
                  name="state"
                  size="small"
                  fullWidth
                  error={'state' in errorMessage}
                  helperText={
                    'state' in errorMessage ? errorMessage.state[0] : ''
                  }
                  autoHighlight
                  autoSelect
                  options={states}
                  getOptionLabel={(option) =>
                    `${option.nome} (${option.sigla})`
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Estado"
                      placeholder="Utilize apenas siglas maiúsculas"
                      required
                    />
                  )}
                />
              </div>

              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={10}>
                  {recaptchaKey ? (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaKey}
                      onChange={onRecaptchaChange}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disableElevation
                    disabled={!submitEnabled}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <EmailIcon fontSize="small" />
                    )}
                    &nbsp;Registrar
                  </Button>
                </Grid>
                <br />
              </Grid>
            </form>
            <Grid item xs={12}>
              <br />
              <Typography variant="button" color="error">
                * campos obrigatórios
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openFormFeedback}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Sucesso</AlertTitle>
          <Typography variant="body1">Registrado com sucesso!</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Registro;
