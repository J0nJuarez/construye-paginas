import React from 'react';
import { useEditor } from '@craftjs/core';
import {Typography, Paper } from '@material-ui/core';
import TextComponent from './elements/textcomponent';
import ButtonComponent from './elements/Buttoncomponent';

const Toolbox = () => {
  const { connectors } = useEditor();
  
  return (
    <div style={{ padding: '16px', borderBottom: '1px solid #ddd', display:'flex', flexDirection: 'column', gap:'5%' }}>
      <Typography style={{width:'100%'}} variant="h6">Componentes</Typography>
      <Paper
        ref={ref => connectors.create(ref, <TextComponent text="Nuevo Texto" />)}
        variant="contained"
        color="primary"
        style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center',width:'90px',height:'90px' }}
      >
        Texto
      </Paper>

      <Paper
        ref={ref => connectors.create(ref, <ButtonComponent text="Nuevo boton" />)}
        variant="contained"
        color="primary"
        style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center',width:'90px',height:'90px' }}
      >
        Boton
      </Paper>
      {/* Agrega más botones de componentes aquí */}
    </div>
  );
};

export default Toolbox;

