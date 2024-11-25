import Listing from './components/Listing';
import etsy from './data/etsy.json';
import './App.css';

function App() {
  const data = JSON.parse(JSON.stringify(etsy));

  return (
    <Listing items={data}/>
  );
}

export default App
