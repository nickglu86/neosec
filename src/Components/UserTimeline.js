import Event from "./Event";

const UserTimeline = ({userID, userEvents }) => {
    return ( 
        <div>
            User Timeline
           ID -  {userID}
           {console.log(userEvents)}
            {userEvents.map((event, index) => {
            console.log(event);
             return (<Event key={index} event={event} />) ;
            //return <div>{event.timestamp}</div>;
            })}
        </div>
     );
}

export default UserTimeline;