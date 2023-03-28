import React,{useState}from 'react'

const SignUp = () => {
  const [firstname, setFirstName] = useState('');
  const[lastname,setLastName]=useState('');
  const[emailaddress,setEmailAddress]=useState('');
  const[password,setPassword]=useState('');

  const handleFirstNameChange=(event)=>{
    setFirstName(event.target.value);
  }
  const handleEmailAddress=(event)=>{
    setEmailAddress(event.target.value);
  }
  const handleLastNameChange=(event)=>{
    setLastName(event.target.value);
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(emailaddress);
    console.log(password);
  }

  return (
    <div className='signUp'>
       <form >
       <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="email" name="firstname" onChange={(event=>handleFirstNameChange(event))}  className="form-control" placeholder='Enter First Name'/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">LastName</label>
    <input type="email" name="setlastname" onChange={(event=>handleLastNameChange(event))} className="form-control" placeholder='Enter Last Name'/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="emailaddress" onChange={(event=>handleEmailAddress(event))} className="form-control" placeholder='Enter Email address'/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"name="password" onChange={(event=>handlePassword(event))} className="form-control" placeholder='Enter password'/>
  </div>
 
  <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default SignUp
