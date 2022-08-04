import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css"

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => { 
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        return (
            <div className={css.form__container}>
                <form onSubmit={ this.handleSubmit} className={css.form}>
                    <label className={css.form__label}>
                        <span className={css.label__title}>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
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
                            value={this.state.number}
                            onChange={this.handleChange}
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
};

ContactForm.propTypes = {
    onSubmit:  PropTypes.func.isRequired,
};

export default ContactForm;