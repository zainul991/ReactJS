

function Card(props) {
    
  return (
    
       <div className="card">
        <img src='https://images.unsplash.com/photo-1774701939418-52903726f5c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, unde.</p>
        <button>View</button>
      </div>
 
  )
}
export default Card
