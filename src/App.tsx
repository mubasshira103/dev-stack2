import { Suspense } from 'react';
import './App.css';
import Technology from './components/Technology';
const dataFetch = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data
};
function App() {
  const promiseData=dataFetch()
  return <>
<Suspense fallback={<h2>Loading...........</h2>}>
  <Technology promiseData={promiseData}></Technology>
</Suspense>
  </>;
}

export default App;
