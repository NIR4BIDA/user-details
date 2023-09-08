import classes from './InputForm.module.css'
import {useState} from 'react'
const InputForm = (props) => {
    const [userInput,setUserInput]=useState({name:'',age:'',});
    const submitHandler=(event)=>{
        event.preventDefault();
        props.addUser(userInput);
        setUserInput({name:'',age:'',});
    }
    const changeHandler=(id,val)=>{
        setUserInput((prev)=>
        {
            return {...prev,[id]:val,};
        });
    }
    return (
        <form className={classes['input-form']} onSubmit={submitHandler}>
            <label>User name</label>
            <input value={userInput.name} onChange={(event)=>changeHandler('name',event.target.value)}></input>
            <label>Age (Years)</label>
            <input value= {userInput.age} onChange={(event)=>changeHandler('age',event.target.value)}></input>
            <button className={classes['input-form']} type='submit'>Add User</button>
        </form>
    );
}
export default InputForm;