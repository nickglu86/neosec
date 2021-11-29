import './Styles/App.css';
import { Layout } from 'antd';
import View from './Components/View';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
          <Layout>
            <Header>
              <h1>Neosec  APP</h1>  
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
