import React from "react";
import PropTypes from "prop-types";
import css from "./ContactList.module.css"

const ContactList = ({ contacts, deleteContact }) => {
    const contactsCaunt = contacts.length;
    
    return (
        <ul className={css.contacts__list}>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.contacts__item}>
                        <span className={css.item__name}>{name}:</span>
                        <span className={css.item__number}>{number}</span>
                        <button type="button" className={css.delete_btn} onClick={() => deleteContact(id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    deleteContact:  PropTypes.func.isRequired,
};

export default ContactList;