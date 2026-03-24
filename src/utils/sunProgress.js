export function getSunProgress({ sunrise, sunset, timezone }) {
  const nowUtc = Date.now();

  // current time in city's timezone
  const localNow = nowUtc + (timezone * 1000);

  // shift sunrise/sunset to same timeline
  const localSunrise = sunrise + (timezone * 1000);
  const localSunset = sunset + (timezone * 1000);

  // 🔥 FIX: calculate start of day using math (not Date.setHours)
  const dayStart =
    Math.floor(localNow / (24 * 60 * 60 * 1000)) *
    (24 * 60 * 60 * 1000);

  const dayEnd = dayStart + (24 * 60 * 60 * 1000);

  const total = dayEnd - dayStart;
  const current = localNow - dayStart;

  const toPercent = (value) => ((value - dayStart) / total) * 100;

  return {
    sunrisePercent: toPercent(localSunrise),
    sunsetPercent: toPercent(localSunset),
    currentPercent: (current / total) * 100,
    isDayProgress:
      localNow >= localSunrise && localNow <= localSunset,
  };
}