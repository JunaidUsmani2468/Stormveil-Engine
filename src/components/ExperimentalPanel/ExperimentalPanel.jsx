import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalWeather } from '../../data/experimentalWeather';
import './ExperimentalPanel.css';

export default function ExperimentalPanel({ isOpen, onClose, onSelect }) {
    return (
        <div  className={`PanelContainer ${isOpen ? "open" : ""}`}>
            <Card className='ExperimentalPanel' sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography className='panelHeading' variant="h5" component="div">
                        <h3>Want to explore 🌍 every weather</h3>
                    </Typography>
                    <Typography className='panelHeading' variant="body2">
                        Try our Experimental 🚀 Mode
                    </Typography>
                    <div className="options">
                        {Object.entries(experimentalWeather).map(([key, data]) => (
                            <div key={key} className="option">
                                <div className="info">
                                    <p>{`${data.cityName} ${data.emoji}`}</p>
                                    <small>{data.condition}</small>
                                </div>

                                <Button onClick={() => onSelect(key)}>
                                    Launch
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardActions className='closeBtnContainer'>
                    <Button size="small" onClick={onClose}>Close</Button>
                </CardActions>
            </Card>
        </div>
    );
}