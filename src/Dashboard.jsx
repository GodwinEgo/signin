import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import './Dashboard.css';

const Dashboard = () =>
{
  const [ authenticated, setAuthenticated ] = useState( null );
  useEffect( () =>
  {
    const loggedInUser = localStorage.getItem( "authenticated" );
    if ( loggedInUser )
    {
      setAuthenticated( loggedInUser );
    }
  }, [] );

  if ( !authenticated )
  {
    // Redirect
  } else
  {
    return (

      <Box sx={ { width: '100%', height: '100vh', bgcolor: '#800000' } }>
        <h1>Hello Godwin</h1>
      </Box>
    );
  }
};

export default Dashboard;