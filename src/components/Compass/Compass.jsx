import { useEffect, useRef } from "react";
import './Compass.css';

export default function Compass({ deg, cityName }) {
    const needleRef = useRef(null);

    const currentDeg = useRef(0);
    const animationFrame = useRef(null);

    // 🎯 MOVE TO TARGET
    const animateToTarget = (target) => {
        cancelAnimationFrame(animationFrame.current);

        const speed = .01; // rotation speed

        const animate = () => {
            let diff = target - currentDeg.current;

            // shortest rotation path
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;

            if (Math.abs(diff) < 0.5) {
                currentDeg.current = target;
                startFlicker(target);
                return;
            }

            currentDeg.current += diff * speed; // smooth step

            updateRotation();
            animationFrame.current = requestAnimationFrame(animate);
        };

        animate();
    };

    // ⚡ FLICKER
    const startFlicker = (base) => {
        cancelAnimationFrame(animationFrame.current);

        let time = 0;

        let amplitude = 10; // current amplitude
        let targetAmplitude = Math.random() * 50; // 🎯 random target

        const animate = () => {
            time += 0.01;

            // 🔥 smoothly move amplitude toward target
            amplitude += (targetAmplitude - amplitude) * 0.02;

            // 🎯 once close → pick new random target
            if (Math.abs(targetAmplitude - amplitude) < 1) {
                targetAmplitude = Math.random() * 20;
            }

            const offset = Math.sin(time) * amplitude;

            currentDeg.current = base + offset;

            updateRotation();
            animationFrame.current = requestAnimationFrame(animate);
        };

        animate();
    };

    // 🌀 CONTROLLED CHAOS
    const startChaos = () => {
        cancelAnimationFrame(animationFrame.current);

        let direction = 1; // 1 = clockwise, -1 = anticlockwise
        let speed = 0.35; // same as flicker feel
        let completedRotation = 0;

        // 🎯 random rounds (1 → 5)
        let targetRounds = Math.floor(Math.random() * 5) + 1;

        const animate = () => {
            // rotate smoothly
            currentDeg.current += direction * speed * 10;

            // track rotation progress
            completedRotation += Math.abs(speed * 10);

            // 🔥 once full rounds completed
            if (completedRotation >= targetRounds * 360) {
                // reset counters
                completedRotation = 0;

                // flip direction
                direction *= -1;

                // new random rounds
                targetRounds = Math.floor(Math.random() * 5) + 1;
            }

            updateRotation();
            animationFrame.current = requestAnimationFrame(animate);
        };

        animate();
    };

    // 🎯 APPLY ROTATION
    const updateRotation = () => {
        if (needleRef.current) {
            needleRef.current.style.transform = `rotate(${currentDeg.current}deg)`;
        }
    };

    // 🔁 CONTROL FLOW
    useEffect(() => {
        if (cityName === "Nowhere") {
            startChaos();
        } else {
            animateToTarget(deg);
        }

        return () => cancelAnimationFrame(animationFrame.current);
    }, [deg, cityName]);

    return (
        <div className="compass">
            <svg viewBox="0 0 100 100" width="80" height="80">
                
                {/* outer circle */}
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="5" fill="none" />

                {/* directions */}
                <text x="50" y="18" textAnchor="middle" fontSize="17" fontWeight="550">N</text>
                <text x="50" y="94" textAnchor="middle" fontSize="17" fontWeight="550">S</text>
                <text x="88" y="55.5" textAnchor="middle" fontSize="17" fontWeight="550">E</text>
                <text x="11" y="55" textAnchor="middle" fontSize="15" fontWeight="550">W</text>

                {/* needle */}
                <g
                    className={`needle`}
                    ref={needleRef}
                >
                    {/* arrow head (direction) */}
                    <polygon points="50,30 54,50 46,50" fill="currentColor" />

                    {/* tail */}
                    <polygon points="50,70 52,50 48,50" fill="currentColor" />

                    {/* center cube */}
                    <rect 
                        x="45" 
                        y="45" 
                        width="10" 
                        height="10" 
                        fill="currentColor"
                        transform="rotate(45 50 50)"
                    />
                </g>
            </svg>
        </div>
    );
}