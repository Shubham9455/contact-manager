import React from "react";
import ContactCard from "./ContactCard";
// import Contacts from "./Contacts";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
      props.getContactId(id);
        console.log(id);
        
    };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
