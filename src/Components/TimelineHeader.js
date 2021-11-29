import { Button, Switch } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import  '../Styles/TimelineHeader.css'

const TimelineHeader = ({userID, arrowClick}) => {
    return (  
        <div className="timeline-header">
             <h2>{userID}</h2>
             <div className="timeline-top">
                 <h3>Timeline</h3>
                 <Button type="primary" >Go To Query</Button>
             </div> 
             <div className="timeline-bottom">
                <div  className="arrows">           
                   <UpOutlined onClick={() => arrowClick('up')} />
                   <DownOutlined  onClick={() => arrowClick('down')}/>
                </div>
                <div>
                    <Switch /> 
                    <span>Alerts Only</span>
                </div>
             </div>
        </div>
    );
}

export default TimelineHeader;