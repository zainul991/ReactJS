import React from 'react'


const App = () => {
  function btnClicked(){
    console.log('Button is Clicked');
  }
  
  function mouseEnter(){
    console.log('mouse entered');
  }
  
  function inputChange(){
    console.log('User is typing');
  }
  function change(val){
    console.log(val);
  }

  return (
    <div>
      <button onDoubleClick={btnClicked} onMouseEnter={mouseEnter}>Clicked Here</button>
      <button onClick={btnClicked}>Explore This as </button>
      <button onClick={()=>{
        console.log("Yes Zainul ye wala");
      }}>Zainul</button>
      <input onChange={inputChange} type="text" placeholder='Enter Name'/>

      <input onChange={function (elem){
        change(elem.target.value);
      }}type="text" placeholder='Enter Text'/>

      <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientX,elem.clientY);
      }}></div>
    </div>
  )
}

export default App
