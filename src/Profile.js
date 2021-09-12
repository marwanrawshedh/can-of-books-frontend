import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
console.log(user.name)
  return (
    isAuthenticated && (<div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={user.picture} />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    {user.email}
    </Card.Text>
   
  </Card.Body>
</Card>
      
        
        
      </div>
    )
  );
};

export default Profile;