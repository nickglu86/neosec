const Event = ({event}) => {
    const {timestamp, method, endpoint_path} = event;
    return ( 
        <div>
            <span>{timestamp}</span>
            <span>{method}</span>
            <span>{endpoint_path}</span>
        </div>
     );
}

export default Event;