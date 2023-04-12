import {useState} from "react";
function F1(props)
{
    // eslint-disable-next-line no-unused-vars
    const[age,setAge]=useState(30);
    const handleClick = () => {
         return setAge(age+1);
        
    }

    return(
        <div>
            {age<40?(<h1>Hello {props.name}  your age is {age}</h1>):(<h1>Time for retirement</h1>)}
            <br>
            </br>
            <button onClick={handleClick}>Click me!</button>

        </div>
    )

}
export default F1;