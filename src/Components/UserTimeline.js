import { useState } from "react";
import Event from "./Event";
import { Timeline } from 'antd';
import DropDown from "./DropDown";

const UserTimeline = ({userID, userEvents }) => {    
    const getNewEventsArr = (firstEventI, lastEventI) =>{
        return userEvents.slice(firstEventI, lastEventI);
    }
    let [eventsToShow, setEventsToShow] = useState(10);
    const [eventsToDisplay, setEventsToDisplay] = useState(getNewEventsArr(0, eventsToShow));
    const [mainEvent, setMainevent] = useState(userEvents[eventsToShow/2 - 1].id)
    
    const updateEventsToView = (newFirstEventIndex) => {
        const newArr = getNewEventsArr(newFirstEventIndex, newFirstEventIndex + eventsToShow);
        setEventsToDisplay([... newArr]);
    }
 

    const checkPosFocusEvent = (mainEventIndex) =>{
        const isEventEndList = mainEventIndex >   userEvents.length - ( eventsToShow/2 + 1)
        const isEventMiddleList = mainEventIndex > eventsToShow/2 - 1;

        return  isEventEndList ? userEvents.length - eventsToShow 
              : isEventMiddleList ? mainEventIndex  - (eventsToShow/2 - 1)  
              : 0;    
    }

    const changeEventsView = (event) => {
        setMainevent(event.id);
        let posFocusEvent =  checkPosFocusEvent(userEvents.indexOf(event))
        updateEventsToView(posFocusEvent);
    }

    return (  
        <div style={{ marginLeft: 'auto', marginRight : 'auto', maxWidth : 600 }}>
           <div>{userID}</div> 
            <DropDown setEventsToShow={setEventsToShow} eventsToShow={eventsToShow} />
           <Timeline>
                {eventsToDisplay.map((event, index) => {
                return (
                    <Event
                        key={index} 
                        event={event} 
                        changeEventsView={changeEventsView}
                        mainEvent={mainEvent}
                    />) ;
                })}
            </Timeline>
        </div>
     );
}

export default UserTimeline;