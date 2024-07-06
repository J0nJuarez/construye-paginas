import React from 'react';
import { Editor, Frame, Element, useEditor } from '@craftjs/core';
import TextComponent from './elements/textcomponent';
import ToolboxItem from './ToolboxItem';
import { Typography } from '@material-ui/core';

const Toolbox = () => {
  return (
    <div style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
      <Typography variant="h6">Componentes</Typography>
      <ToolboxItem type="TextComponent">Bloque de texto</ToolboxItem>
    </div>
  );
};

const SettingsPanel = () => {
  const { selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    const currentNode = state.nodes[currentNodeId];
    return {
      selected: currentNode && currentNode.related && currentNode.related.settings,
    };
  });

  return (
    <div style={{ padding: '16px' }}>
      {selected && React.createElement(selected)}
    </div>
  );
};

const CraftEditor = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Editor resolver={{TextComponent }}>
        <div style={{ width: '20%', borderRight: '1px solid #ddd' }}>
          <Toolbox />
        </div>
        <div style={{ flex: 1, padding: '16px' }}>
          <Frame>
            <Element is="div" canvas>
              <TextComponent text="Hola, Craft.js con Material-UI" />
            </Element>
          </Frame>
        </div>
        <div style={{ width: '20%', borderLeft: '1px solid #ddd' }}>
          <SettingsPanel />
        </div>
      </Editor>
    </div>
  );
};

export default CraftEditor;
