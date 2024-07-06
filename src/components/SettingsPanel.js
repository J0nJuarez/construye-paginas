import React from 'react';
import { useEditor } from '@craftjs/core';

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

export default SettingsPanel;
