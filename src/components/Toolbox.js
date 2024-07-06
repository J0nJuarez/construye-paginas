import React from 'react';
import { useEditor } from '@craftjs/core';
import { Button, Typography } from '@material-ui/core';
import TextComponent from './elements/textcomponent';
import ButtonComponent from './elements/Buttoncomponent';

const Toolbox = () => {
  const { connectors } = useEditor();
  
  return (
    <div style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
      <Typography variant="h6">Componentes</Typography>
      <Button
        ref={ref => connectors.create(ref, <TextComponent text="Nuevo Texto" />)}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Texto
      </Button>

      <Button
        ref={ref => connectors.create(ref, <ButtonComponent text="Nuevo boton" />)}
        variant="contained"
        color="primary"
        style={{ margin: '8px 0' }}
      >
        Texto
      </Button>
      {/* Agrega más botones de componentes aquí */}
    </div>
  );
};

export default Toolbox;

