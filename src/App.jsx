import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './assets/hooks/useCurrencyInfo';
import InputBox from './assets/components/input';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="bg-slate-400 p-10 rounded-xl" >
      <h1 className="text-5xl font-extrabold  drop-shadow-lg mb-2">Currency Converter</h1>    
      <p className="text-lg text-red-700 italic font-light">Made by @muffakiribnhamid</p>

   
       <div



>
<div className="w-full max-w-md mx-auto p-8 bg-white/70 rounded-lg shadow-lg backdrop-blur-md">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      convert();
    }}
  >
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Currency Converter</h2>
    
    <div className="mb-4">
      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
      />
    </div>
    
    <div className="relative w-full h-8 my-2 flex justify-center items-center">
      <button
        type="button"
        className="border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 transition-transform transform hover:scale-110"
        onClick={swap}
      >
        Swap
      </button>
    </div>

    <div className="mb-4">
      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOptions={options}
        selectCurrency={to}
        onCurrencyChange={(currency) => setTo(currency)}
        amountDisable
      />
    </div>

    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700">
      Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
  </form>
</div>
</div>
    </div>
    
   
  );
}

export default App;
