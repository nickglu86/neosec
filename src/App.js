import './App.css';
import { Layout } from 'antd';
import View from './Components/View';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
          <Layout style={{minHeight : '100vh'}}>
            <Header>
              <h1 style={{color : 'white'}}>Neosec  APP</h1>  
            </Header>
            <Content>
                <View />
            </Content>
            <Footer></Footer>
          </Layout> 
    </div>
  );
}

export default App;
