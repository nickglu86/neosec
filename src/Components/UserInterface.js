import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css'; 
import React from 'react';

const { Meta } = Card;

class UserInterface extends React.Component {
    state = {
        loading: true,
      };

    onChange = checked => {
        this.setState({ loading: !checked });
      };

    render(){
        const { loading } = this.state;

        return (
            <>
            <Switch checked={!loading} onChange={this.onChange} />
    
            <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
    
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </>
      );
    }

}

export default UserInterface;