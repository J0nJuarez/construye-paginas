import React, {useState} from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import TextComponent from './elements/textcomponent';
import Toolbox from './Toolbox';
import SettingsPanel from './SettingsPanel';
import ButtonComponent from './elements/Buttoncomponent';
import Cambiarview from './CambiarView';

const CraftEditor = () => {
    const [viewport, setViewport] = useState('desktop');
  
    const getViewportStyle = () => {
      switch (viewport) {
        case 'tablet':
          return { width: '480px', height: '640px', margin: '0 auto', backgroundColor:'#fff' };
        case 'mobile':
          return { width: '375px', height: '667px', margin: '0 auto', backgroundColor:'#fff' };
        default:
          return { width: '100%', height: '100%', backgroundColor:'#fff' };
      }
    };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Editor resolver={{ TextComponent, ButtonComponent }}>
        <div style={{ width: '20%', borderRight: '1px solid #ddd' }}>
          <Toolbox />
        </div>
        <div style={{ flex: 1, overflowY:'auto', overflowWrap:'break-word', backgroundColor:'#000' }}>
          <div style={getViewportStyle()}>
            <Frame>
                    <Element is="div" canvas>
                        <TextComponent text="Hola, Dinopreneur"/>
                        <ButtonComponent text="Botoneame"/>
                    </Element>
            </Frame>
          </div>
        </div>
        <div style={{ width: '20%', borderLeft: '1px solid #ddd' }}>
          <Cambiarview setViewport={setViewport} />
          <SettingsPanel />
        </div>
      </Editor>
    </div>
  );
};

export default CraftEditor;

