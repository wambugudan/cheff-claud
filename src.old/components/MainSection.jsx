import {useState} from 'react';

export default function Main(){
    

  function signUp(event){
    // const data = Object.formEntries(formData)
    // console.log(data)
    // const username = formData.get("uName")
    // console.log(username)
    
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("uName");
    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employment = formData.get("employmentStatus");
    const skills = formData.getAll("skills");
    console.log(skills)

  }
  
  
  const [isShown , setIsShown] = useState(false)

  const toggle = setIsShown(prevIsShown=>{
    return(
        prevIsShown = !prevIsShown
    )
  })
  
  return(
      <>
          {isShown? <h2>Sign Up</h2> : <h2>Log In</h2>}
          <button onClick={toggle}>Toggle</button>
          <form onSubmit={signUp}>

              <label htmlFor="uName">User Name</label>
              <input id="uName" type="text" name="uName" defaultValue={"dwambugu"}/>

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" defaultValue={"dwambugu@example.com"}/>

              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" defaultValue={"pass123456"}/>
              
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" defaultValue={"This is a description"}></textarea>

              <fieldset className="radioButton">
                  <legend>Employment Status</legend>
                  <label htmlFor="workStatus">
                      <input type="radio" value={"full-time"} name="employmentStatus" />
                      Full-time
                  </label>

                  <label htmlFor="workStatus">
                      <input type="radio" value={"part-time"} name="employmentStatus" defaultChecked="true" />
                      Part-time
                  </label>

                  <label htmlFor="workStatus">
                      <input type="radio" value={"unemployed"} name="employmentStatus" />
                      Unemployed
                  </label>
              </fieldset>

              <fieldset className="checkBoxes">
                  <legend> Skills</legend>
                  <label htmlFor="workStatus">
                      <input type="checkbox" value={"html"} name="skills" />
                      Html
                  </label>

                  <label htmlFor="workStatus">
                      <input type="checkbox" value={"javascript"} name="skills" defaultChecked="true" />
                      JavaScript
                  </label>

                  <label htmlFor="workStatus">
                      <input type="checkbox" value={"python"} name="skills" />
                      Python
                  </label>
              </fieldset>

              <button>Submit</button>
          </form>
      </>
  )
}