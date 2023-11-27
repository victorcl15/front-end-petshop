import React, { useState } from 'react';
import { useLogin } from '../../../context';
import { Button, TextField, Typography, Container, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { getLogin } from '../services/loginService';


const MyContainer = styled(Container)({
  marginTop: 'theme.spacing(8)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const MyForm = styled('form')({
  width: '100%', // Fix IE 11 issue.
  marginTop: 'theme.spacing(1)',
});

const MyButton = styled(Button)({
  margin: 'theme.spacing(3, 0, 2)',
});

const useStyles = () => {
  return {
    paper: {
      marginTop: 'theme.spacing(8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: 'theme.spacing(1)',
    },
    submit: {
      margin: 'theme.spacing(3, 0, 2)',
    },
  };
};

const Login = ({handleIrHome}) => {

  const { usuario, login, logout } = useLogin(); 
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const user_data = { email, contrasena: password }
    const user_response = await getLogin(user_data);

    console.log(user_response);
    login(user_response.data)
    console.log(user_response);
    
    if(usuario && usuario!=="" && usuario!== undefined && user_response.success!==false){
        handleIrHome();
    }
    
  };

  return (
    <MyContainer component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <MyForm className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <MyButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesión
          </MyButton>
        </MyForm>
      </div>
    </MyContainer>
  );
};

export default Login;
