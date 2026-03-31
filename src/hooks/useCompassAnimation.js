import { useEffect, useRef } from "react";

export default function useCompassAnimation({ deg, cityName, needleRef }) {
    const currentDeg = useRef(0);
    const animationFrame = useRef(null);

    // 🎯 APPLY ROTATION
    const updateRotation = () => {
        if (needleRef.current) {
            const normalized = ((currentDeg.current % 360) + 360) % 360;
            needleRef.current.style.transform = `rotate(${normalized}deg)`;
        }
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

    // 🎯 MOVE TO TARGET
    const animateToTarget = (target) => {
        cancelAnimationFrame(animationFrame.current);

        const speed = .009; // rotation speed

        const animate = () => {
            let diff = target - currentDeg.current;

            // shortest rotation path
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;

            if (Math.abs(diff) < 3) {
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

    // 🎯 FLOW CONTROL
    useEffect(() => {
        if (cityName === "Nowhere") {
            startChaos();
        } else {
            animateToTarget(deg);
        }

        return () => cancelAnimationFrame(animationFrame.current);
    }, [deg, cityName]);
}