// src/views/Chat.js
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import historialIcon from '../assets/LogoHistory.png';
import opcionesIcon from '../assets/LogoOption.png';
import sendLogo from '../assets/LogoSend.png'; 

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [openHistorial, setOpenHistorial] = useState(false);
  const [openOpciones, setOpenOpciones] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Esta es una respuesta del bot', sender: 'bot' }
        ]);
      }, 1000);
    }
  };

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
      <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="space-between">
        
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
        <Typography variant="h4" sx={{ textAlign: 'center', marginTop: 3 }}>
          Chat de AI ChatDocs
        </Typography>
        
        {/* Mensajes */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginTop: 2,
            backgroundColor: '#f9f9f9'
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px'
              }}
            >
              <Box
                sx={{
                  maxWidth: '70%',
                  padding: '10px',
                  borderRadius: '100px',
                  backgroundColor: message.sender === 'user' ? '#B560E1' : '#7F7F7F',
                  color: '#fff'
                }}
              >
                {message.text}
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* Enviar Mensajes */}
        <Box display="flex" sx={{ bottom: '20px', left: 0, right: 0, padding: '20px' }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Escribe un mensaje..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            sx={{
              marginRight: '10px',
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px', 
              }
            }}
          />
          
          {/* Logo enviar */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              borderRadius: '30%', 
              backgroundColor: '#B560E1', 
              transition: 'background-color 0.3s ease',
            }}
            onClick={handleSendMessage}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A0EB'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#B560E1'}
          >
            <img
              src={sendLogo}
              alt="LogoSend"
              style={{ width: '55px', height: '50px',borderRadius: '30%', }}
            />
          </Box>
        </Box>
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

export default Chat;
