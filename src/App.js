import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validateData = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (!!value.match(/^[-+]?[0-9]*\.?[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === 'rate') {
        setRate(value);
        setIsRate(true);
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    } else {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === 'rate') {
        setRate(value);
        setIsRate(false);
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }
  const handleCalculate = (e)=>{
    if(!principle || !rate || !year){
      alert('Please fill the form completely')
    }
    else{
      // alert('submitted')
      setInterest(principle*rate*year/100)
      e.preventDefault()
    }
  }
  const handleReset =(e)=>
  {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 bg-dark' style={{ height: '100vh' }}>
      <div className='bg-light p-5 rounded' style={{ width: '500px' }}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div className='bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shadow' style={{ height: '150px' }}>
          <h1>₹ {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className="mb-3">
            <TextField name='principle' onChange={(e) => validateData(e)} value={principle || ""} id="outlined-basic" label="₹ Priciple Amount" variant="outlined" className='w-100' />
          </div>
          {!isPrinciple && <div><p className='text-danger fw-bolder'>*Invalid Input</p></div>}
          <div className="mb-3">
            <TextField name='rate' onChange={(e) => validateData(e)} value={rate || ""} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" className='w-100' />
            {!isRate &&
              <div>
                <p className='text-danger fw-bolder'>Invalid Input</p>
              </div>
            }
          </div>
          <div className="mb-3">
            <TextField onChange={(e) => validateData(e)} name='year' value={year || ""} id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' />
          </div>
          {!isYear &&
              <div>
                <p className='text-danger fw-bolder'>Invalid Input</p>
              </div>
            }
          <div className='mt-4'>
            <Stack direction="row" spacing={2}>
              <Button type="submit" disabled={isPrinciple && isRate && isYear ?false:true} variant="contained" style={{ height: '60px', width: '200px' }} className='bg-success'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ height: '60px', width: '200px' }}>Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;