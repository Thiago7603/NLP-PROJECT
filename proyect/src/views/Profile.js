// src/views/Profile.js
import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/LogoProfile.png';

function Profile() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Nombre del Usuario');
  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [username, setUsername] = useState('nombre_usuario');
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  const handleEditProfile = () => {
    setOpen(true);
  };

  const handleSaveProfile = () => {
    // Aquí podrías agregar la lógica para guardar los cambios
    setOpen(false);
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
          src={profilePic}
          sx={{ width: 120, height: 120, marginBottom: 2 }}
        />

        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {name}
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 2, color: '#555' }}>
          {email}
        </Typography>

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
            '&:hover': { backgroundColor: '#D4A0EB' },
          }}
        >
          Cerrar Sesión
        </Button>
      </Box>

      {/* Dialog para editar perfil */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Nombre de Usuario"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Correo electrónico"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Nombre"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="URL de la Foto de Perfil"
            fullWidth
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSaveProfile} color="secondary">
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Profile;
