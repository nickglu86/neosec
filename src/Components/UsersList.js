import 'antd/dist/antd.css'; 
import { Card, Avatar, Typography } from 'antd';

const UsersList  = ({users, setUserToShow}) => {
    const { Meta } = Card;
    const { Title } = Typography;
    const titleStyle  ={ width: 'auto', margin : 20 , textAlign : 'center'};
    const userListStyle  = { display : 'flex', flexDirection : 'column' , alignItems : "center"};
    const cardStyle  =  { maxWidth: 500 , marginTop: 16 , cursor : "pointer"};
  
   
    return (
        <>
        <Title 
             level={3}
             style={titleStyle}
             >
             Users List
       </Title>
       <div style={userListStyle}>
         {users.map(  (user, index) =>{
           return (
             <Card 
                    style={cardStyle}
                    onClick={() => setUserToShow(user)}
                    key={index}
                    >
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

export default UsersList;