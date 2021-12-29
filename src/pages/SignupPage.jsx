import { Component, createRef } from "react";
import { connect } from "react-redux";
import { getUser } from "../store/actions/userActions";
import { userService } from "../services/userService";

class _signUpPage extends Component {
  state = {
    username: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;

    this.setState({ username: value });
  };
  signUp = () => {
    userService.signUp(this.state.username);
    this.props.history.push("/");
  };


  render() {
    return (
      <div className="contact-edit">
        <h1>Signup</h1>
        <form onSubmit={this.onSavecontact}>
          <label htmlFor="model">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            required
          />

          <button onClick={this.signUp}>Signup</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser,
};

export const signUpPage = connect(null, mapDispatchToProps)(_signUpPage);
