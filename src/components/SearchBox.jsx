import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getWeather } from '../services/weatherService';
import './SearchBox.css';

export default function SearchBox({ updateWeather }) {
    let [city, setCity] = useState('');
    const [error, setError] = useState(false);

    let handleChange = (e) => {
        setCity(e.target.value);
        setError(false);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        const cleanedCity = city.trim().toLowerCase();
        
        if (cleanedCity === '') {
            setError(true);
            return;
        }

        try {
            const weather = await getWeather(cleanedCity);
            console.log(weather);
            updateWeather(weather);
        } catch (err) {
            setError(true);
        }

        setCity('');
    }

    return (
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    className= "searchBar"
                    id="city"
                    label="City Name"
                    size="small"
                    value={city}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? "Please enter a valid city name" : ""}
                />
                <Button
                    variant="outlined"
                    size='small'
                    className='searchBtn'
                    endIcon={<SearchIcon/>}
                    type="submit"
                >search</Button>
            </form>
        </div>
    )
}