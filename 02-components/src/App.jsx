import React from 'react'
import Nav from './components/nav'
import Card from './components/card'


const App = () => {
  const user = "harsh";
  return (
    <div> 
      <Nav /> 
      <Nav />
      <Card /> 
      <Card />
      <Card />
    </div>
  ) // is app ko khaali rakkhna hota h 
  // sab yahin pe hoch poch nhi karna h 
  // kyunki yahin pe render hota h end me 
  // component based architecture follow karna hota h 

}

export default App
