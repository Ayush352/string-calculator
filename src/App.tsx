import { useState } from 'react';
import stringCalculator from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    try {
      setError('');
      const sum = stringCalculator.add(input);
      setResult(sum);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Make sure you enter numbers correctly!');
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#333' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={400}
        height={267}
        alt='Decorative image of a ball of tan yarn'
      />

      <h1>String Calculator</h1>

      <h2>Enter numbers</h2>

      <textarea
        aria-label='Enter numbers separated by commas, spaces, or newlines'
        style={{ margin: '10px 0', color: '#333', display: 'block', width: '100%', maxWidth: '600px', minHeight: '80px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
        onFocus={(e) => e.target.style.outline = '2px solid #008cba'}
        onBlur={(e) => e.target.style.outline = 'none'}
        placeholder='Enter numbers to calculate sum'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <button
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
        onFocus={(e) => e.target.style.outline = '2px solid #005a7a'}
        onBlur={(e) => e.target.style.outline = 'none'}>
        Calculate
      </button>
      

      {result !== null && <p style={{ color: 'green' }}>Result: {result}</p>}

      {error && (
        <div role='alert' style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </div>
)}
    </div>
  );
};

export default App;
