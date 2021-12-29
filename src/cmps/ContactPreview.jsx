import { Link } from "react-router-dom";

export function ContactPreview({ contact, removeContact }) {
  function onRemoveContact(ev) {
    ev.stopPropagation();
    removeContact(contact._id);
  }

  const imgUrl = `https://robohash.org/${contact.name}?set=set4`;
  return (
    <div className="contact-preview">
      <Link to={`/contact/${contact._id}`} className="info">
        <img src={imgUrl} alt="" />
        <h3>{contact.name}</h3>
      </Link>
      <div className="preview-delete-container">
        <span
          onClick={onRemoveContact}
          className="preview-delete pointer material-icons icon"
        >
          delete
        </span>
      </div>
    </div>
  );
}
