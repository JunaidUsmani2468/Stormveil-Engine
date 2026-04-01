import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ExperimentalPanel.css';

export default function ExperimentalPanel({ isOpen, onClose }) {
    return (
        <div  className={`PanelContainer ${isOpen ? "open" : ""}`}>
            <Card className='ExperimentalPanel' sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        <h3>Want to explore🌍 every weather</h3>
                    </Typography>
                    <Typography variant="body2">
                        Try our Experimental🚀 Mode
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={onClose}>Close</Button>
                </CardActions>
            </Card>
        </div>
    );
}