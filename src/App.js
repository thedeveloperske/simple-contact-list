import React, {useState, useEffect} from 'react'
import './App.css'
import ContactCard from './ContactCard'

const App = () => {

  // const contacts = [
  //   {
  //     name : "Jenny Bondon",
  //     email : "jeny@bondon.com",
  //     avatarUrl : "https://via.placeholder.com/150",
  //     age : 57
  //   },
  //   {
  //     name : "Cara Milovi",
  //     email : "cara@milovi.com",
  //     avatarUrl : "https://via.placeholder.com/150",  
  //     age : 67
  //   },
  //   {
  //     name : "Yorgi Koskof", 
  //     email : "yogikoskof@russia.com", 
  //     avatarUrl : "https://via.placeholder.com/150",  
  //     age : 77,
  //   },
  //   {
  //     name : "Brad Whittaker", 
  //     email : "brad@russia.com", 
  //     avatarUrl : "https://via.placeholder.com/150",  
  //     age : 87,
  //   },
  //   {
  //     name : "Q Bondon", 
  //     email : "q@universalexports.com", 
  //     avatarUrl : "https://via.placeholder.com/150",  
  //     age : 97,
  //   }
  // ];

  const [results, setResults] = useState([]);

    useEffect(()=>{
      fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResults(data.results)
    });
  }, []) 
 
  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard 
            key={index}
            name = {result.name.title + " " + result.name.first + " " + result.name.last}
            email = {result.email}
            avatarUrl = {result.picture.large}
            nat = {result.nat}
            cell = {result.cell}
            phone = {result.phone}
            age = {result.dob.age}/>
        )
      })}
    </div>
  )
}

export default App