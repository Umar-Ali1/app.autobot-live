import React, { useState,useContext  } from 'react';
import {
    Box,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Alert,
    CircularProgress,
    Container,
    Typography,
    createTheme,
    ThemeProvider,
} from '@mui/material';
import Image from 'next/image';
import axios from 'axios';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state for button

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true on submit

    try {
      const data = {
        username:email,
        password,
        isSuperAdmin: isSuperAdmin ? 1 : 0,
      };
      console.log("Entered data is:", data)
      const response = await axios.post('https://devbot.usenumbers.ai/token', data);

      setSuccessMessage('Login successful!');
      console.log(response.data); // Log the API response payload
    } catch (error:any) {
      setErrorMessage(error.message || 'An error occurred during login.');
    } finally {
      setLoading(false); // Set loading state to false after request completes
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm" sx={{ backgroundColor: 'black' }}>
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ mb: 4 }}>
        <Image src="/logo-numbersAI.svg" alt="Logo" width={150} height={50} />
          </Box>
          <Typography component="h1" variant="h5" color="white">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={isSuperAdmin} onChange={(e) => setIsSuperAdmin(e.target.checked)} color="primary" />}
              label="Super Admin"
              sx={{ '& .MuiTypography-root': { color: 'white' } }}
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;