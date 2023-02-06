import React, { useState } from 'react'

const ContactCard = (props) => {

    console.log(props);

    const [showAge, setShowAge] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

  return (
    <div>
        <div className='contact-card'>
            <div className='row'>
                <img src={props.avatarUrl} alt='profile'/>
            </div>      
            <div className='user-details'>
                <p>Name : {props.name}</p>
                <p>Email : {props.email}</p>
                <p>Nationality : {props.nat}</p> 
                <p>Cell : {props.cell}</p>
                {showPhone && <p>Phone : {props.phone}</p> }
                {showAge && <p>Age : {props.age}</p> }
                <button onClick={() => setShowAge(!showAge)}>Show Age</button>        
                <button onClick={() => setShowPhone(!showPhone)}>Show Phone</button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard