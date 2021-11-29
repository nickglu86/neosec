import { Menu, Dropdown} from 'antd';
import { useState } from 'react'; 

const DropDown = ({setEventsToShow , amountOfEventToDisplay }) => {
    const [numberOfEvents, setNumberOfEvents] = useState(amountOfEventToDisplay);
    
    const handleDropdownClick = (e) => {
        let eventNumber = e.key;
        setNumberOfEvents(eventNumber);
        setEventsToShow(eventNumber)
      }
    const dropdown = (
        <Menu onClick={handleDropdownClick}>
          <Menu.Item key={10} >
           10
          </Menu.Item>
          <Menu.Item key={20}>
           20
          </Menu.Item>
        </Menu>
      );
    return (
        <Dropdown.Button overlay={dropdown} placement="bottomCenter">
            Showing {numberOfEvents} Events
        </Dropdown.Button>
      );
}

export default DropDown;