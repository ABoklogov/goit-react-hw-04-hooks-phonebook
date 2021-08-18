import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <button className={s.contactBtn} onClick={() => onDeleteContact(id)}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
