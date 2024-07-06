import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import TextComponent from './elements/textcomponent';
import Toolbox from './Toolbox';
import SettingsPanel from './SettingsPanel';

const CraftEditor = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Editor resolver={{ TextComponent }}>
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

