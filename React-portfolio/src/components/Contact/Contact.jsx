import React, { useRef } from 'react'
import "./Contact.css";

export default function Contact() {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const idea = useRef("");

  const handleSubmit = () => {
    console.log("Name:", name.current.value)
    console.log("Email:", email.current.value)
    console.log("Phone no:", phone.current.value)
    console.log("Idea:", idea.current.value);
    alert("your details send successfully...!")

  };



  return (
    <>
      <div className="contact-div">
      
        <p className='title3'>get in touch</p>
        <h3 className='title2'>Contact</h3>
    

        <div className="contact">
          <h2>Contact Form</h2>
          <input type="text" placeholder='Enter your name' ref={name} />
          <input type="text" placeholder='example@gmail.com' ref={email} />
          <input type="text" placeholder='Enter your mobile no.' ref={phone} />
          <input type="text" placeholder='Enter your idea....' ref={idea} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}