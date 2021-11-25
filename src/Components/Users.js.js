import { useState, useEffect } from "react";
import { Card, Avatar, Typography } from 'antd';

const Users = () => {

  const [data, setdata] = useState([]);
  const [UsersID, setUsersID] = useState([]);
  const { Meta } = Card;
  const { Title } = Typography;

  
  const initData = () => {
    fetch('./data-set.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
       // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        setdata(myJson);
        let users = myJson.map( event => event.user_id)
        setUsersID(users.filter((value,index) => users.indexOf(value) === index));
      });
  }
  useEffect(() => {
    initData();
  }, [])
 
  return ( 
      <>
         <Title 
              level={3}
              style={{ width: 'auto', margin : 20 , textAlign : 'center'}}
              >
              Users List
        </Title>
        <div style={{ display : 'flex', flexDirection : 'column' , alignItems : "center"}}>
          {UsersID.map(  user =>{
            return (
              <Card style={{ maxWidth: 500 , marginTop: 16 , cursor : "pointer"}} >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="User ID"
                  description={user}
                />
              </Card>
            )
          })}
        </div>

      </>
   );
}

export default Users;