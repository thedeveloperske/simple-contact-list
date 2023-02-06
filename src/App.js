import React from 'react'
import './App.css'
import ContactCard from './ContactCard'

const App = () => {

  const contacts = [
    {
      name : "Jenny Bondon",
      email : "jeny@bondon.com",
      avatarUrl : "https://via.placeholder.com/150",
      age : 57
    },
    {
      name : "Cara Milovi",
      email : "cara@milovi.com",
      avatarUrl : "https://via.placeholder.com/150",  
      age : 22
    },
    {
      name : "Yorgi Koskof", 
      email : "yogikoskof@russia.com", 
      avatarUrl : "https://via.placeholder.com/150",  
      age : 43,
    }
  ];

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard 
            key={index}
            name = {contact.name}
            email = {contact.email}
            avatarUrl = {contact.avatarUrl}
            age = {contact.age}/>
        )
      })}
    </div>
  )
}

export default App