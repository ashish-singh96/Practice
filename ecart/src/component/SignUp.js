import React,{useState} from 'react'

const SignUp = () => {
  const[logInDetails,setOriginalDetail]=useState({
    firstname:'',
    lastname:'',
    emailaddress:'',
  });
  

  const handleChange=(event)=>{
    const{name,value}=event.target;
    setOriginalDetail({...logInDetails,[name]:value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(logInDetails);
  }

  return (
    <div className='signUp'>
      <form>
      <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">FirstName</label>
    <input type="email" name="firstname" onChange={(event=>handleChange(event))} className="form-control"  placeholder='Enter First Name'/>
    
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">LastName</label>
    <input type="text"  name="lastname" onChange={(event=>handleChange(event))} className="form-control" placeholder='Enter LastName'/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email Address</label>
    <input type="text"  name="emailaddress" onChange={(event=>handleChange(event))} className="form-control" placeholder='Enter LastName'/>
  </div>

  <button onClick={(event)=>handleSubmit(event)} class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
