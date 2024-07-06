import React from 'react';
import { useNode } from '@craftjs/core';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

const ButtonComponent = ({ text, fontSize, color, variant }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <Button
      ref={ref => connect(drag(ref))}
      variant={variant}
      style={{ fontSize, color }}
    >
      {text}
    </Button>
  );
};

const ButtonSettings = () => {
  const { actions, text, fontSize, color, variant } = useNode(node => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    color: node.data.props.color,
    variant: node.data.props.variant
  }));

  return (
    <div>
      <TextField
        style={{width:'100%'}}
        label="Texto"
        value={text}
        onChange={e => actions.setProp(props => props.text = e.target.value)}
      />
      <TextField
      style={{width:'100%'}}
        label="Tamaño de Fuente"
        value={fontSize}
        onChange={e => actions.setProp(props => props.fontSize = e.target.value)}
      />
      <TextField
      style={{width:'100%'}}
        label="Color de la letra"
        type="color"
        value={color}
        onChange={e => actions.setProp(props => props.color = e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Variante</InputLabel>
        <Select
          value={variant}
          onChange={e => actions.setProp(props => props.variant = e.target.value)}
        >
          <MenuItem value="contained">Contained</MenuItem>
          <MenuItem value="outlined">Outlined</MenuItem>
          <MenuItem value="text">Text</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

ButtonComponent.craft = {
  props: {
    text: 'Texto de ejemplo',
    fontSize: '16px',
    color: '#000000', 
    variant: 'contained'
  },
  related: {
    settings: ButtonSettings
  }
};

export default ButtonComponent;

