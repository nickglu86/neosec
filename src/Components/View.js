import { useState, useEffect } from "react";
import UsersList from "./UsersList";
import EventsTimeline from "./EventsTimeline";

const View = () => {

  const [data, setdata] = useState([]);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('users-list');
  const [userToRender, setUserToRender] = useState(0);

  const initData = () => {
    fetch('./data-set.json')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setdata(myJson);
        let users = myJson.map( event => event.user_id)
        setUsers(users.filter((value,index) => users.indexOf(value) === index));
      });
  }

  const setUserToShow = userid =>{
    setUserToRender(userid);
    setView('user-timeline');
  }

  useEffect(() => {
    initData();
  }, [])
 
  return ( 
    <main>
       {view === 'users-list' && (
            <UsersList 
              users={users} 
              setUserToShow={setUserToShow}
            />
       )}
       {view === 'user-timeline' && (
            <EventsTimeline  
              userID={userToRender}
              userEvents={data}
            />
       )}
    </main>
   );
}

export default View;