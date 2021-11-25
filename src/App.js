import './App.css';
import { Layout } from 'antd';
import UserInterface from './Components/UserInterface';
import Users from './Components/Users.js';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
          <Layout style={{minHeight : '100vh'}}>
            <Header>
              <h1 style={{color : 'white'}}>Neosec  APP</h1>  
            </Header>
            <Content>
                <Users />
            </Content>
            <Footer></Footer>
          </Layout> 
    </div>
  );
}

export default App;
