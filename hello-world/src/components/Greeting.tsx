type GreetingProps={name:string, age:string};
const changeName = () : void => {
    console.log("button was clicked");
}

function Greeting(props:GreetingProps ){
    <div>
    <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p>
    <button onClick={changeName} >change my name</button>
</div>}
export default Greeting;