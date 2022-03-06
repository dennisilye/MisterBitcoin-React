import { Link } from "react-router-dom";
import { Component } from "react";
import { contactService } from "../services/contactService";

export class ContactDetails extends Component {
  state = {
    currContact: null,
  };
  componentDidMount() {
    this.loadContact();
  }
  async loadContact() {
    const currContact = await contactService.getContactById(
      this.props.match.params.id
    );
    this.setState({ currContact });
  }
  onGoBack = () => {
    this.props.history.push("/contact");
  };

  render() {
    const { currContact } = this.state;
    if (!currContact) return <div>Loading...</div>;
    return (
      <div className="container contact-details">
        <div>
          <img
            src={`https://robohash.org/${currContact.name}?set=set4`}
            alt=""
          />
        </div>
        <div>
          <div className="details-row">
            <span className="material-icons icon">badge</span>
            <h2>Name:</h2>
            <h3>{currContact.name}</h3>
          </div>
          <hr />
          <div className="details-row">
            <span className="material-icons icon">call</span>
            <h2>Phone:</h2>
            <h3>{currContact.phone}</h3>
          </div>
          <hr />
          <div className="details-row">
            <span className="material-icons icon">email</span>
            <h2>Email:</h2>
            <h3>{currContact.email}</h3>
          </div>
          <hr />
          <div className="details-edit-contact flex space-between align-center">
            <Link to={`/contact/edit/${currContact._id}`}>Edit Contact</Link>
          </div>
          <div><button onClick={this.onGoBack}>Back</button></div>
        </div>
      </div>
    );
  }
}
