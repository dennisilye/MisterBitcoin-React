import { Component, createRef } from "react";
import { contactService } from "../services/contactService";

export class ContactEdit extends Component {
  state = {
    contact: null,
  };

  inputRef = createRef();

  async componentDidMount() {
    const contactId = this.props.match.params.id;
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact();
    this.setState({ contact }, () => this.inputRef.current.focus());
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }));
  };

  onSavecontact = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...this.state.contact });
    this.props.history.push("/");
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading...</div>;
    return (
      <div className="contact-edit">
        <h1>Add contact</h1>
        <form onSubmit={this.onSavecontact}>
          <label htmlFor="model">Name</label>
          <input
            ref={this.inputRef}
            onChange={this.handleChange}
            value={contact.name}
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            ref={this.inputRef}
            onChange={this.handleChange}
            value={contact.phone}
            type="text"
            name="phone"
            id="phone"
            required
          ></input>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            value={contact.email}
            type="text"
            name="email"
            id="email"
            required
          />

          <button>Save</button>
        </form>
      </div>
    );
  }
}
