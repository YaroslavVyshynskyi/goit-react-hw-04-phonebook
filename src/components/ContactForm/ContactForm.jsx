import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css"


const ContactForm = ({onSubmit}) => {
    const[name, setName] = useState("");
    const[number, setNumber] = useState("");
    
    const handleNameChange = e => {
        setName(e.currentTarget.value); 
    };

    const handleNumberChange = e => {
        setNumber(e.currentTarget.value); 
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    const handleSubmit = e => { 
        e.preventDefault();

        onSubmit({name, number});
        reset();
    }

        return (
            <div className={css.form__container}>
                <form onSubmit={ handleSubmit} className={css.form}>
                    <label className={css.form__label}>
                        <span className={css.label__title}>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={css.form__label}>
                        <span className={css.label__title}>Number</span>
                        <input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleNumberChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button type="submit" className={css.btn__add}>Add contact</button>
                </form>
            </div>
        );
    };


ContactForm.propTypes = {
    onSubmit:  PropTypes.func.isRequired,
};

export default ContactForm;