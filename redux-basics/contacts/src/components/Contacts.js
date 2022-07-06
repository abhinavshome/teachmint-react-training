import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const { contacts, selectedContactId } = useSelector((state) => state);
  const selectedContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <div>
        {contacts.map((contact) => (
          <div
            style={{
              backgroundColor:
                selectedContactId === contact.id ? "red" : "lightgray",
            }}
            onClick={() =>
              dispatch({ type: "SELECT_CONTACT", payload: contact.id })
            }
          >
            {contact.name}
          </div>
        ))}
      </div>
      <div>
        <div>{selectedContact.name}</div>
        <div>{selectedContact.number}</div>
        <div>{selectedContact.address}</div>
      </div>
    </div>
  );
};

export default Contacts;
