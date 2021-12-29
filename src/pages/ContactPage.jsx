import { Component } from "react";
import { connect } from 'react-redux'
import { ContactFilter } from "../cmps/ContactFilter";
import { ContactList } from "../cmps/ContactList";
import { contactService } from "../services/contactService";
import { Link } from "react-router-dom";
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {
  state = {
    contacts: null,
    currContact: null,
  };
  async componentWillMount() {
    this.props.loadContacts();
  }

  async loadContacts() {
    const { filterBy } = this.state;
    const contacts = await contactService.getContacts(filterBy);
    this.setState({ contacts });
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts();
  };

  removeContact =  (contactId) => {
    this.props.removeContact(contactId)
   
  };
  goBack = () => {
    this.setState({ currContact: null });
  };

  render() {
    const { contacts, currContact } = this.props;
    // console.log('contacts :>> ', contacts);
    return !contacts ? (
      <div>Loading...</div>
    ) : (
      <div className="container">
        <div className="filter-container flex space-between align-center">
          <ContactFilter onChangeFilter={this.onChangeFilter} />
          <Link to="/contact/edit">New Contact</Link>
        </div>
        <ContactList
          currContact={currContact}
          removeContact={this.removeContact}
          goBack={this.goBack}
          contacts={contacts}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      contacts: state.contactModule.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
  // spendBalance
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)