import React from 'react';
import { useEditor } from '@craftjs/core';
import { Button } from '@material-ui/core';

const ToolboxItem = ({ type, children }) => {
  const { connectors } = useEditor();
  return (
    <Button
      ref={(ref) => connectors.create(ref, type)}
      variant="contained"
      color="primary"
      style={{ margin: '8px 0' }}
    >
      {children}
    </Button>
  );
};

export default ToolboxItem;
