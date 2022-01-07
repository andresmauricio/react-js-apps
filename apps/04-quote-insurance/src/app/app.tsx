import { useState } from 'react';
import styles from './app.module.css';
import Error from './components/Error';
import GroupRadio from './components/GroupRadio';
import Select from './components/Select';
export function App() {
  const [countries, setCountries] = useState(['America', 'Europa', 'Asia']);
  const [years, setYears] = useState([2018, 2019, 2020, 2021, 2022]);
  const [plains, setProducts] = useState(['Basic', 'Completed']);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ country: '', year: '', category: '' });

  const updateQuote = (input: any) => {
    setQuote({ ...quote, [input.target.name]: input.target.value });
  };

  const executeQuote = (e: any) => {
    e.preventDefault();
    const invalidFields = Object.values(quote).some(
      (field) => field.length === 0
    );
    if (invalidFields) {
      setError(true);
      return;
    }

    setError(false);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title bg-success text-white p-3 text-center">
              Quote insurance
            </h4>
            {error ? <Error /> : null}
            <form onSubmit={executeQuote}>
              <Select
                label="Country"
                options={countries}
                updateQuote={updateQuote}
              />
              <Select label="Year" options={years} updateQuote={updateQuote} />
              <GroupRadio
                labels={plains}
                name="category"
                updateQuote={updateQuote}
              />
              <button className="btn btn-primary w-100">Quote</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
