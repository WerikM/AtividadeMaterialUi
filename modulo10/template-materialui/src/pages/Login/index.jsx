import React, {useState, } from 'react';
import { FormControl,  Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

  


const Login = () => {
    const [login, setlogin ] = useState('');
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setlogin(e.target.value) }} />
              <FormHelperText id="login_nome_helper_text">Testando...</FormHelperText>
            </FormControl>
          </Grid>

    );
}

export default Login;