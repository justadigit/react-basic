import './App.css';

import { ItemProvider } from './context/ItemContext';
import View from './View';
function App() {
  return (
    <div className="App">
      <ItemProvider>
        <View />
      </ItemProvider>
    </div>
  );
}

export default App;
