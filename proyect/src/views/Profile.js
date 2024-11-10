// src/views/Profile.js
import React from 'react';
import { Container, Box, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/LogoProfile.png'; 

function Profile() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    
    alert('Editar perfil');
  };

  const handleLogout = () => {

    navigate('/');  
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Avatar
          alt="LogoProfile"
          src={defaultProfilePic}
          sx={{ width: 120, height: 120, marginBottom: 2 }}
        />

        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          Nombre del Usuario
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 2, color: '#555' }}>
          usuario@ejemplo.com
        </Typography>

        {/* Boton*/}
        <Button
          variant="contained"
          onClick={handleEditProfile}
          sx={{
            marginBottom: 2,
            backgroundColor: '#B560E1',
            '&:hover': { backgroundColor: '#D4A0EB' },
          }}
        >
          Editar Perfil
        </Button>

        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{
            backgroundColor: '#B560E1',
            '&:hover': { backgroundColor: '#D4A0EB'},
          }}
        >
          Cerrar Sesión
        </Button>
      </Box>
    </Container>
  );
}

export default Profile;
