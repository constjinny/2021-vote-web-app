import { ReactElement } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { Header, Contents, Footer } from "../features/layout";
import { VoteListPage } from "../features/voteList";
import { VoteWritePage } from "../features/voteWrite";

export default function Routes(): ReactElement {
  return (
    <BrowserRouter basename="2021-vote-web-app">
      <Header />
      <Contents>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/list" />
          </Route>

          <Route path="/list" exact component={VoteListPage} />

          <Route path="/create" exact component={VoteWritePage} />
          <Route path="/modify/:vote_id" exact component={VoteWritePage} />
        </Switch>
      </Contents>
      <Footer />
    </BrowserRouter>
  );
}
