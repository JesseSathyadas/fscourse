import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryService.getAll().then(data => {
      setCountries(data)
    })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filtered = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleChange} />
      </div>

      {filtered.length > 10 && <p>Too many matches, specify another filter</p>}

      {filtered.length <= 10 && filtered.length > 1 &&
        filtered.map(country =>
          <div key={country.name.common}>
            {country.name.common}
          </div>
        )
      }

      {filtered.length === 1 &&
        <Country country={filtered[0]} />
      }
    </div>
  )
}

export default App
