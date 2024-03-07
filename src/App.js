import { useRoutes } from 'react-router-dom';
import getRoutes from './routes';
import { useSelector } from 'react-redux';

const App = () => {
  // const user = true;
  const user = useSelector((state) => state.userReducer.user);
  const routing = useRoutes(getRoutes(user));
  return <>{routing}</>
}

export default App
