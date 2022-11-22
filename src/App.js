import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" ,firstName:"",lastName:"",phNumber:"",panNumber:"",age:"",address:"",pincode:"",setError:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      /*-------------------------------------------------- Username --------------------------------------------*/
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (values.username.search(/^[A-Za-z][A-Za-z0-9]+$/)) {
      errors.username = "Username should be alpha-numeric characters ";
    }
         /*-------------------------------------------------- Email --------------------------------------------*/
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
     /*-------------------------------------------------- Password --------------------------------------------*/

    if (!values.password) {
      errors.password = "Password is required"; 
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.search(/[0-9]/)==-1) {
      errors.password = "Password must have 1 numeric character";
    }
    else if (values.password.search(/[A-Z]/)==-1) {
      errors.password = "Password must have 1 Uppercase Character";
    }
    else if (values.password.search(/[!/@/#/$/%/^/&/*/(/)/-/_/+/=]/)==-1) {
      errors.password = "Password must have 1 special character";
    }

         /*-------------------------------------------------- First Name --------------------------------------------*/
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }

         /*-------------------------------------------------- Last Name --------------------------------------------*/
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }

         /*-------------------------------------------------- Phone Number --------------------------------------------*/
    if (!values.phNumber) {
      errors.phNumber = "Mobile Number is required!";
    }
    else if (!values.phNumber.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
      errors.phNumber = "Enter Numbers only & it should be only 10 digit";
    }

      /*-------------------------------------------------- PAN Number --------------------------------------------*/

    if (!values.panNumber) {
      errors.panNumber = "PAN Number is required!";
    }

    else if (!values.panNumber.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      
      errors.panNumber = "PAN Number is not Valid!";
    }


      /*-------------------------------------------------- Age --------------------------------------------*/
      if (!values.age) {
        errors.age = "Age is required!";
      }
 
    const currentYear = new Date().getFullYear();
    const year = values.age.split("-")[0];
    const newage = currentYear - year;
    console.log(currentYear)
    console.log(year)
     console.log (values.age)
     console.log (newage)
     if (newage < 18) {
          errors.age = "Age should be greater than 18!";
        } 
      

        /*-------------------------------------------------- Address --------------------------------------------*/
        if (!values.address) {
          errors.address = "Address is required!";
        }
     /*-------------------------------------------------- Pincode --------------------------------------------*/
     if (!values.pincode) {
      errors.pincode = "PinCode is required!";
    }
    else if (!values.pincode.match(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/)) {
      errors.pincode = "PinCode is not Valid!";
    }
    
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registered  successfully</div>
      ) : 
      (
        <pre>{JSON.stringify( undefined, 2)}</pre>
        //for printing values just add values or initial value here as a first argument
      )}

      <form onSubmit={handleSubmit}>
        <h1>User Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
       {/*-------------------------------------------------- Username --------------------------------------------*/}
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          {/*-------------------------------------------------- Password --------------------------------------------*/}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password "
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          {/*-------------------------------------------------- User First Name --------------------------------------------*/}
          <div className="field">
            <label>User First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="User First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstName}</p>
{/*-------------------------------------------------- User Last Name--------------------------------------------*/}
           
          <div className="field">
            <label>User Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="User Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastName}</p>
          
   {/*-------------------------------------------------- Email --------------------------------------------*/}

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
      
      {/*-------------------------------------------------- User Mobile Number --------------------------------------------*/}
         
          <div className="field">
            <label>User Mobile Number</label>
            <input
              type="mobile"
              name="phNumber"
              placeholder="10 digit mobile Number"
              value={formValues.phNumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phNumber}</p>
{/*-------------------------------------------------- User PAN Number --------------------------------------------*/}
          <div className="field">
            <label>User PAN  Number</label>
            <input
              type="mobile"
              name="panNumber"
              placeholder="PAN Number"
              value={formValues.panNumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.panNumber}</p>

{/* --------------------------------------------------  Age --------------------------------------------*/}
          <div className="field">
            <label>Age</label>
            <input
              type="date"
              name="age"
              placeholder="dd/mm/yyyy"
              value={formValues.age}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.age}</p>


          


{/*-------------------------------------------------- User Address --------------------------------------------*/}
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address}</p>

{/*-------------------------------------------------- Pin Code --------------------------------------------*/}
          <div className="field">
            <label>Pin Code</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter Pin Code"
              value={formValues.pincode}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pincode}</p>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
