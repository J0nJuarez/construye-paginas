import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

const Cambiarview = ({ setViewport }) => {
  return (
    <ButtonGroup variant="text" color="primary">
      <Button onClick={() => setViewport('desktop')}>PC</Button>
      <Button onClick={() => setViewport('tablet')}>Tablet</Button>
      <Button onClick={() => setViewport('mobile')}>Móvil</Button>
    </ButtonGroup>
  );
};

export default Cambiarview;
