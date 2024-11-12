// src/views/Home.js
import React, { useState } from 'react';
import { Button, Container, Typography, Box, Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LogoApp.png';
import icono from '../assets/LogoText.png';
import opcionesIcon from '../assets/LogoOption.png';
import historialIcon from '../assets/LogoHistory.png';

function Home() {
  const navigate = useNavigate();
  
  const [openHistorial, setOpenHistorial] = useState(false);
  const [openOpciones, setOpenOpciones] = useState(false);

  const toggleHistorialDrawer = () => {
    setOpenHistorial(!openHistorial);
  };

  const toggleOpcionesDrawer = () => {
    setOpenOpciones(!openOpciones);
  };

  const handleProfile = () => {
    navigate('/profile'); 
  };

  const handleHelp = () => {
    navigate(''); 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" position="relative">
        {/* Imagen Historial */}
        <Box position="absolute" top="20px" left="20px">
          <img 
            src={historialIcon} 
            alt="LogoHistory" 
            style={{ width: '40px', height: '40px', cursor: 'pointer', transition: 'filter 0.3s' }} 
            onClick={toggleHistorialDrawer} 
            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.3)'} 
            onMouseLeave={(e) => e.target.style.filter = 'none'}
          />
        </Box>

        {/* Imagen Opciones */}
        <Box position="absolute" top="20px" right="20px">
          <img 
            src={opcionesIcon} 
            alt="LogoOption" 
            style={{ width: '40px', height: '40px', transition: 'filter 0.3s'}} 
            onClick={toggleOpcionesDrawer} 
            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.3)'} 
            onMouseLeave={(e) => e.target.style.filter = 'none'} 
          />
        </Box>
        
        {/* Título */}
        <Typography variant="h2" gutterBottom>
          ¡Bienvenido!
        </Typography>
        
        {/* Logo */}
        <img src={logo} alt="LogoApp" style={{ width: '500px', marginBottom: '20px', transition: 'filter 0.3s' }} />

        {/* Título Logo */}
        <Typography variant="h2" gutterBottom sx={{ marginTop: '-70px', marginBottom: '20px' }}>
          AI ChatDocs
        </Typography>

        {/* Descripción */}
        <Box 
          display="flex" 
          alignItems="center" 
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            marginBottom: '50px',
          }}
        >
          <img 
            src={icono} 
            alt="LogoText" 
            style={{ width: '40px', height: '40px', marginRight: '16px' }} 
          />
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            Interactúa con nuestro sistema y obtén respuestas rápidas sobre los estándares del desarrollo de software según el SWEBOK V4.
          </Typography>
        </Box>
        
        {/* Botón */}
        <Button 
          variant="contained"  
          onClick={() => navigate('/Chat')}
          size="large"
          sx={{
            backgroundColor: '#B560E1',
            borderRadius: '20px',
            minWidth: '170px',
            '&:hover': {
              backgroundColor: '#D4A0EB',
            }
          }}
        >
          Comenzar
        </Button>
      </Box>

      {/* Drawer Historial */}
      <Drawer
        anchor="left"
        open={openHistorial}
        onClose={toggleHistorialDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            padding: '20px',
            overflowY: 'auto',
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Historial ChatDocs
        </Typography>
        <Box>
            <Typography variant="body1" paragraph>
                Aquí puedes revisar los detalles de tu historial.
            </Typography>
            <Button variant="contained" onClick={() => alert("Ver más detalles")}>
                Ver Detalles
            </Button>
        </Box>
      </Drawer>

      {/* Drawer Opciones */}
      <Drawer
        anchor="right"
        open={openOpciones}
        onClose={toggleOpcionesDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            padding: '20px',
            overflowY: 'auto',
          },
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ marginBottom: '40px', fontWeight: 'bold', paddingRight: '60px', textAlign: 'right', }}>
          Opciones
        </Typography>
        <Box>
          <Button 
            variant="contained" 
            onClick={handleProfile}
            sx={{ 
              marginBottom: '10px',
              backgroundColor: '#B560E1',           
              minWidth: '210px',
              '&:hover': {
                backgroundColor: '#D4A0EB',   
              },
            }} 
          >
            Ver Perfil
          </Button>

          <Button 
          variant="contained" 
          onClick={handleHelp}
          sx={{ 
            marginBottom: '10px',
            backgroundColor: '#B560E1',          
            minWidth: '210px',
            '&:hover': {
              backgroundColor: '#D4A0EB',   
            },
          }} 
          >
            Ayuda
          </Button>

          <Button 
          variant="contained"
          onClick={handleLogout}
          sx={{ 
            marginBottom: '10px', 
            backgroundColor: '#B560E1',          
            minWidth: '210px',
            '&:hover': {
              backgroundColor: '#D4A0EB',   
            },
          }} 
          >
            Cerrar Chat
          </Button>
        </Box>
      </Drawer>
    </Container>
  );
}

export default Home;
