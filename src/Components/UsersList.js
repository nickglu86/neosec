import 'antd/dist/antd.css'; 
import { Card, Avatar, Typography } from 'antd';

const UsersList  = ({users, setUserToShow}) => {
    const { Meta } = Card;
    const { Title } = Typography;
    
    return (
        <>
        <Title 
             level={3}
             style={{ width: 'auto', margin : 20 , textAlign : 'center'}}
             >
             Users List
       </Title>
       <div style={{ display : 'flex', flexDirection : 'column' , alignItems : "center"}}>
         {users.map(  (user, index) =>{
           return (
             <Card 
                    style={{ maxWidth: 500 , marginTop: 16 , cursor : "pointer"}}
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