import React from "react";
import { Button } from "@material-ui/core";
import { useEditor } from "@craftjs/core";
import Hazdeshazboton from "./hacer-deshacer";

export const Topbar = () => {
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  return (
 <div style={{display:'flex', justifyContent:'center'}}>
         <Hazdeshazboton/>
          <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          onClick={() => {console.log(query.serialize())}}>Serializar JSON a la consola</Button>
</div>
  )
};