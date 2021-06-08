import { ReactElement } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Header, Contents, Footer } from "../features/layout";
import { VoteListPage } from "../features/voteList";
import { VoteWritePage } from "../features/voteWrite";

const history = createBrowserHistory({ basename: "2021-vote-web-app" });

export default function Routes(): ReactElement {
  return (
    <Router history={history}>
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
    </Router>
  );
}
