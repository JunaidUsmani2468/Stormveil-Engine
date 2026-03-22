import './Compass.css';

export default function Compass({ deg }) {
    return (
        <div className="compass">
            <svg viewBox="0 0 100 100" width="80" height="80">
                
                {/* outer circle */}
                <circle cx="50" cy="50" r="25" stroke="red" strokeWidth="5" fill="none" />

                {/* directions */}
                <text x="50" y="18" textAnchor="middle" fontSize="17" fontWeight="550">N</text>
                <text x="50" y="94" textAnchor="middle" fontSize="17" fontWeight="550">S</text>
                <text x="88" y="55.5" textAnchor="middle" fontSize="17" fontWeight="550">E</text>
                <text x="11" y="55" textAnchor="middle" fontSize="15" fontWeight="550">W</text>

                {/* needle */}
                <g
                    className="needle"
                    style={{ transform: `rotate(${deg}deg)` }}
                >
                    {/* arrow head (direction) */}
                    <polygon points="50,30 54,50 46,50" fill="red" />

                    {/* tail */}
                    <polygon points="50,70 52,50 48,50" fill="red" />

                    {/* center cube */}
                    <rect 
                        x="45" 
                        y="45" 
                        width="10" 
                        height="10" 
                        fill="red"
                        transform="rotate(45 50 50)"
                    />
                </g>
            </svg>
        </div>
    );
}