
import AppRoutes from './routes';
import Layout from './components/layout';
import './styles/Global.css';

const App = () => {
  return (
    <>
      <Layout>
      <AppRoutes />
      </Layout>
    </>
  );
};

export default App;
