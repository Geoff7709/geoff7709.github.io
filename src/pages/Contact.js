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
    e.target.reset()
}

function Contact() {

    return (
        <form id="contact-form" className="container" onSubmit={onSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="hidden" name="contact_number" />
                    <label for="name">Name *</label>
                    <input type="text" name="user_name" className="form-control" id="first_name" placeholder="First Last" required />
                </div>
                <div className="form-group col-md-6">
                    <label for="email">Email *</label>
                    <input type="email" name="user_email" className="form-control" id="email" placeholder="e.g. something@somewhere.com" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="company_name">Company name</label>
                    <input type="text" name="company_name" className="form-control" id="company_name" placeholder="e.g. Acme Enterprises" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label for="comments">Message</label>
                    <textarea className="form-control bg-white" name="message" id="comments" rows="3"></textarea>
                </div>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )

}

export default Contact