import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
  return (
    <header>
      <nav>
        <NavLink activeClassName="my-active" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="my-active" to="/contact">
          Contacts
        </NavLink>
        <NavLink activeClassName="my-active" to="/statistic">
          Statistics
        </NavLink>
        <NavLink activeClassName="my-active" to="/signup">
          Signup
        </NavLink>
      </nav>
    </header>
  );
}
export const AppHeader = withRouter(_AppHeader);
