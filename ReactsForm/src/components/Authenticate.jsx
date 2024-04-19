import { useState } from "react";





function Authenticate() {

  const BASED_URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(BASED_URL
        )(
          { method: "GET",
          headers: {"Content-type" : "application.json",
          Authorization : `Bearer ${token}`}}
        );

      const result = await response.json();
      setSuccessMessage(result.message);
    } catch(error) {
        setError(error.message);
    }




  }











  return ( 
   <div>
  <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage }</p>}
    {error && <p> {error}</p>}
    <button onClick={handleClick}> AUTHENTICATE TOKEN!</button>


  

  </div>
  )
}

export default Authenticate