import React from 'react';
import { useEditor} from '@craftjs/core';
import { Button, ButtonGroup} from '@material-ui/core';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';


const Hazdeshazboton = () => {
    const { canUndo, canRedo, actions } = useEditor((state, query) => ({
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo()
    }));

  return (
    <ButtonGroup variant="text" color="primary" style={{}}>
{
  canUndo 
    ? <Button onClick={() => actions.history.undo()}><UndoIcon/></Button>
    : <Button onClick={() => alert('No se puede deshacer')} disabled><UndoIcon/></Button>
}
{
  canRedo 
    ? <Button onClick={() => actions.history.redo()}><RedoIcon/></Button>
    : <Button onClick={() => alert('No se puede rehacer')} disabled><RedoIcon/></Button>
}

    </ButtonGroup>
  );
};

export default Hazdeshazboton;
