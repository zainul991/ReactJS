import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
    <Card user='Zainul' age='21'/>
    <Card user='Altaf' age='25'/>
    <Card user='Zaid' age='26'/>
    <Card user='Abdul' age='27' />
    <Card user='Maroof' age='29'/>
    </div>
    
  )
}

export default App
