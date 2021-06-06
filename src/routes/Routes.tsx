import { ReactElement } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { VoteList } from "../features/voteList";
import { VoteDetail } from "../features/voteDetail";
import { VoteResult } from "../features/voteResult";

const history = createBrowserHistory();

export default function Routes(): ReactElement {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/list" />
        </Route>
        <Route path="/list" exact component={VoteList} />
        <Route path="/list/:vote_id" exact component={VoteDetail} />
        <Route path="/list/:vote_id/result" exact component={VoteResult} />
      </Switch>
    </Router>
  );
}
