import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './ExperimentalBtn.css';

export default function ExperimentalBtn({ onClick, isOpen }) {
    return (
        <button
            className={`experimental-btn ${isOpen ? 'hide' : '' }`}
            onClick={ onClick }
        >
            <RocketLaunchIcon />
        </button>
    )
}