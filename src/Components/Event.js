import {  Tag } from 'antd';
const Event = (props) => {
    const { event, changeEventsView, mainEvent , setFocusedEvent } = props;
    const {id, timestamp, method, endpoint_path} = event;
    const focusedEventClass =  id == mainEvent ? 'focused-event' : '';
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];
    const dayString = timestamp.slice(8,10);
    const day = dayString - 0;
    const month = monthNames[parseInt(timestamp.slice(5,7))-1]
    const focusEventLabel = focusedEventClass ==='focused-event' ? <div className="focus-event">{day} {month}</div>: '';
    if(focusedEventClass ==='focused-event'){ 
        setFocusedEvent(event);
    }
    return (  
        <>
            <div  
                    onClick={() => changeEventsView(event)}
                    className={`event ${focusedEventClass}`}
                >
                <span className="timestamp"> {timestamp.slice(10,23)}</span>
                <div  className="circle">
                    <div></div>   
                </div>
                <div className={`method ${method.toLowerCase()}`}>
                <Tag>{method}</Tag>
                </div>
                <span className="path">{endpoint_path}</span>
            </div>
            {focusEventLabel}
        </>
     );
}

export default Event;