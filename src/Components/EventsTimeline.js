import { useState } from "react";
import Event from "./Event";
import DropDown from "./DropDown";
import TimelineHeader from "./TimelineHeader";

const EventsTimeline = ({userID, userEvents }) => {    
    const getNewEventsArr = (firstEventI, lastEventI) =>{
        return userEvents.slice(firstEventI, lastEventI);
    }
    
    let [amountOfEventToDisplay, setamountOfEventToDisplay] = useState(10);
    const [eventsToDisplay, setEventsToDisplay] = useState(getNewEventsArr(0, amountOfEventToDisplay));
    const [mainEventID, setMainevent] = useState(userEvents[amountOfEventToDisplay/2 - 1].id)
    const [focusedEvent, setFocusedEvent] = useState({});
    
    const updateEventsToView = (newFirstEventIndex) => {
        const NewEventsArr = getNewEventsArr(newFirstEventIndex, newFirstEventIndex + amountOfEventToDisplay);
        setEventsToDisplay([...NewEventsArr]);
    }
 

    const checkPosFocusEvent = (mainEventIndex) =>{
        const isEventEndList = mainEventIndex >   userEvents.length - ( amountOfEventToDisplay/2 + 1)
        const isEventMiddleList = mainEventIndex > amountOfEventToDisplay/2 - 1;

        return  isEventEndList ? userEvents.length - amountOfEventToDisplay 
              : isEventMiddleList ? mainEventIndex  - (amountOfEventToDisplay/2 - 1)  
              : 0;    
    }

    const changeEventsView = (event) => {
        setMainevent(event.id);
        let posFocusEvent =  checkPosFocusEvent(userEvents.indexOf(event))
        updateEventsToView(posFocusEvent);
    }
    const arrowClick = direction => {
        let currentFocusEventIndex =  eventsToDisplay.indexOf(focusedEvent);
        if(direction ===  'up' && currentFocusEventIndex !== 0){
            changeEventsView(eventsToDisplay[currentFocusEventIndex - 1])
        } else if(direction ===  'down' && userEvents.indexOf(focusedEvent) !== userEvents.length -1){
            changeEventsView(eventsToDisplay[currentFocusEventIndex + 1])
        }
        
    }

    return (  
        <div className="timeline">
            <TimelineHeader userID={userID} arrowClick={arrowClick}/>
            <div className="events-list">
                { eventsToDisplay.map((event, index) => {
                    return (
                        <Event
                            key={index} 
                            event={event} 
                            changeEventsView={changeEventsView}
                            mainEvent={mainEventID}
                            setFocusedEvent={setFocusedEvent}
                        />
                    ) ;
                })}
            </div>
            {/* <DropDown setEventsToShow={setamountOfEventToDisplay} amountOfEventToDisplay={amountOfEventToDisplay} />
       */}
        </div>
     );
}

export default EventsTimeline;