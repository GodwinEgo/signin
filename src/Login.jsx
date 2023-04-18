import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>
{
  const navigate = useNavigate();
  const [ username, setUsername ] = useState( "" );
  const [ password, setPassword ] = useState( "" );
  const [ authenticated, setAuthenticated ] = useState( "" );
  const users = [ { username: "Ego", password: "GodwinEgo" } ];
  const handleSubmit = ( e ) =>
  {
    e.preventDefault()
    const account = users.find( ( user ) => user.username === username );
    if ( account && account.password === password )
    {
      setAuthenticated( true )
      localStorage.setItem( authenticated, true );
      navigate( "/dashboard" );
    }
  };


  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="Username"
          value={ username }
          onChange={ ( e ) => setUsername( e.target.value ) }
        />
        <input
          type="password"
          name="Password"
          onChange={ ( e ) => setPassword( e.target.value ) }
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};


export default Login