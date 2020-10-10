import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Import aqui todos os arquivos das minhas rotas
import Firebase from "./pages/Firebase";
import Livraria from "./pages/Livraria";



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Firebase} />
        <Route path="/livraria" exact component={Livraria} />
      </Switch>
    </BrowserRouter>
  );
}
