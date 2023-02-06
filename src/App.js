import React from 'react'
import './App.css'
import ContactCard from './ContactCard'

const App = () => {
  return (
    <div>
      <ContactCard 
        name = "Jenny Bondon" 
        email = "jeny@bondon.com" 
        avatarUrl = "https://via.placeholder.com/150"  
        age = {57}/>
        
      <ContactCard 
        name = "Cara Milovi" 
        email = "cara@milovi.com" 
        avatarUrl = "https://via.placeholder.com/150"  
        age = {22}/>

      <ContactCard 
        name = "Yorgi Koskof" 
        email = "yogikoskof@russia.com" 
        avatarUrl = "https://via.placeholder.com/150"  
        age = {43}/>
    </div>
  )
}

export default App