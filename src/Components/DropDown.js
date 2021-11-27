import { Menu, Dropdown} from 'antd';
import { useState } from 'react/cjs/react.development';

 

const DropDown = (props) => {
    const {setEventsToShow , eventsToShow } = props;
    const [numberOfEvents, setNumberOfEvents] = useState(eventsToShow);
    
    const handleMenuClick = (e) => {
        let eventNumber = e.key;
        setNumberOfEvents(eventNumber);
        setEventsToShow(eventNumber)
      }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key={10} >
           10
          </Menu.Item>
          <Menu.Item key={20}>
           20
          </Menu.Item>
        </Menu>
      );
    return (
        <Dropdown.Button overlay={menu} placement="bottomCenter">
            Showing {numberOfEvents} Events
        </Dropdown.Button>
      );
}

export default DropDown;