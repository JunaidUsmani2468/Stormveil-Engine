import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { getWeather } from '../../services/weatherService';
import ExperimentalBtn from '../ExperimentalBtn/ExperimentalBtn';
import './SearchBox.css';

export default function SearchBox({ updateWeather, isMobile, isOpen, onClick }) {
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
            {isMobile && (
                <ExperimentalBtn 
                    isOpen={isOpen}
                    onClick={onClick}
                />
            )}
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
                
                {!isMobile ?
                    <Button
                        variant="outlined"
                        size='small'
                        className='searchBtn'
                        endIcon={<RocketLaunchIcon/>}
                        type="submit"
                    >Launch</Button> :
                    <button
                        type='submit'
                        className='mobileBtn'
                    >
                        <SearchIcon/>
                    </button>
                }
            </form>
        </div>
    )
}