import { useState } from 'react';
import styles from './app.module.css';
import GroupRadio from './components/GroupRadio';
import Select from './components/Select';
export function App() {
  const [countries, setCountries] = useState(['America', 'Europa', 'Asia']);
  const [years, setYears] = useState([2018, 2019, 2020, 2021, 2022]);
  const [plains, setProducts] = useState(['Basic', 'Completed']);
  const [quote, setQuote] = useState({ country: '', year: 0, category: '' });

  const updateQuote = (input: any) => {
    setQuote({ ...quote, [input.target.name]: input.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title bg-primary text-white p-3 text-center">
              Quote insurance
            </h4>
            <form>
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
              <button className="btn btn-primary btn-block">Quote</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
