import {  Tag , Timeline} from 'antd';
const Event = (props) => {
    const { event, changeEventsView, mainEvent } = props;
    const {id, timestamp, method, endpoint_path} = event;
    return ( 
 
        <Timeline.Item  
                onClick={() => changeEventsView(event)}
                style={{cursor : 'pointer'}}
                className={id == mainEvent ? 'border' : ''}
            >
            <h1>{id}</h1>
            <span>{timestamp}</span>
            <Tag>{method}</Tag>
            <span>{endpoint_path}</span>
        </Timeline.Item>
 
     );
}

export default Event;