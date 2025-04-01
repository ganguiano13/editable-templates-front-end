import { useEffect, useState } from 'react'
import './App.css'
import './pages/TestTemplate.tsx'
import TestTemplate from './pages/TestTemplate.tsx'
import UpdateValues from './pages/UpdateValues.tsx'
import axios from 'axios'
import IData from './interfaces/IData.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'

function App() {
  const [data, setData] = useState<IData>();

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/data')
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
        console.log('Data retrieved successfully');
      } else {
        console.error('Error retrieving data');
        console.log(res);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-template" element={<TestTemplate firstName={data.firstName} lastName={data.lastName} 
          streetAddress={data.streetAddress} city={data.city} state={data.state} postalCode={data.postalCode} policyNumber={data.policyNumber} 
          policyEffectiveDate={data.policyEffectiveDate} currentBalance={data.currentBalance} amountDue={data.amountDue} />} />
        <Route path="/update-values" element={<UpdateValues data={data} />} />
      </Routes>
    </BrowserRouter>
      

    
  )
}

export default App
