import React from 'react';
import { useNode } from '@craftjs/core';
import { Typography, TextField } from '@material-ui/core';

const TextComponent = ({ text, fontSize, color }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <Typography
      ref={ref => connect(drag(ref))}
      variant="body1"
      style={{ fontSize, color }}
    >
      {text}
    </Typography>
  );
};

const TextSettings = () => {
  const { actions, text, fontSize, color } = useNode(node => ({
    text: node.data.props.text,
    fontSize: node.data.props.fontSize,
    color: node.data.props.color
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
    </div>
  );
};

TextComponent.craft = {
  props: {
    text: 'Texto de ejemplo',
    fontSize: '36px',
    color: '#000'
  },
  related: {
    settings: TextSettings
  }
};

export default TextComponent;


