import React from 'react'
import emailjs, { init } from 'emailjs-com'
const emailJsId = process.env.REACT_APP_EMAILJS_USER_ID
const emailJsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const service = process.env.REACT_APP_EMAILJS_SERVICE_ID
init(emailJsId)
const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(service, emailJsTemplate, e.target, emailJsId)
        .then(result => {
            alert('Message sent. I will respond to you as soon as possible.', result.text)
        })
        .catch(error => {
            console.error(error)
            alert('An error occured, please try again.', error.text)
        })
}

function Contact() {

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )

}

export default Contact