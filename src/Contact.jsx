import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 50) {
                errors.name = 'Must be 50 characters or less';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 10) {
                errors.message = 'Must be 10 characters or more';
            }

            return errors;
        },
        onSubmit: async (values, actions) => {
            try {
                const response = await axios.post('http://localhost:3008/contact', values);
                if (response.status === 200) {
                    alert('Message sent successfully!');
                    actions.resetForm();
                }
            } catch (error) {
                console.error('Axios error:', error);
                alert('Failed to send message.');
            }
        }
    });

    return (
        <div className="container">
            <h4 className="my-4">Contact Me</h4>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="4"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (
                        <div className="invalid-feedback">{formik.errors.message}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;