import 'antd/dist/antd.css'; 
import  '../Styles/UsersList.css'
import { Card, Avatar, Typography } from 'antd';

const UsersList  = ({users, setUserToShow}) => {
    const { Meta } = Card;
    const { Title } = Typography;
    return (
        <>
        <Title 
             level={3}
             >
             Users List
       </Title>
       <div  className="users-list">
         {users.map(  (user, index) =>{
           return (
             <Card 
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