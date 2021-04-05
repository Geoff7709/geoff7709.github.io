import React from 'react'
import emailjs from 'emailjs-com'
const emailJsId = process.env.REACT_APP_EMAILJS_USED_ID
const emailJsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID

const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    emailjs.sendForm(emailjs.default_service, emailJsTemplate, e.target, emailJsId)
    .then(result => {
        alert('Message sent. I will respond to you as soon as possible.', result.text)
    },
    error => {
        alert('An error occured, please try again.', error.text)
    })
}

function Contact() {
    return (
    <form className='form' onSubmit={onSubmit} >
        <h2>Contact</h2>
        <p>Your Name:</p>
        <input name='name' type='text' placeholder='name' className='form_input'/>
        <p>Email:</p>
        <input name='email' type='text' placeholder='your email' className='form_input'/>
        <p>Subject:</p>
        <input name='subject' type='text' placeholder='subject' className='form_input'/>
        <p>Your Message:</p>
        <textarea name='message' type='text' placeholder='Your Message' className='form__input-message' ></textarea>
        <button>Send Message</button>
    </form>
    )
}

export default Contact