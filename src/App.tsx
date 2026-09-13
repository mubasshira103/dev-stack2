import { Suspense } from 'react';
import './App.css';
import type { Technology as TechnologyType } from './types/technology';
import TechnologySection from './components/TechnologySection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

const dataFetch = async (): Promise<TechnologyType[]> => {
  const res = await fetch('./data.json');
  const data: TechnologyType[] = await res.json();

  return data;
};

function App() {
  const promiseData: Promise<TechnologyType[]> = dataFetch();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading...........</h2>}>
        <TechnologySection promiseData={promiseData} />
      </Suspense>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
