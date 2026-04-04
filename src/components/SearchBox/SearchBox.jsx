import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useState } from 'react';
import { getWeather } from '../../services/weatherService';
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
                    label="LOCATE STORM"
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
                    endIcon={<RocketLaunchIcon/>}
                    type="submit"
                >Launch</Button>
            </form>
        </div>
    )
}