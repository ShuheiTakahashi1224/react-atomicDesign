import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "../components/pages/Top";
import Users from "../components/pages/Users";
import { DefaultLayout, HeaderOnly } from "../components/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
