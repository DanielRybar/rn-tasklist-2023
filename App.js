import {DataProvider} from "./providers/DataProvider"
import { Main } from './components/Main';

export const App = () => {  
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}

export default App;