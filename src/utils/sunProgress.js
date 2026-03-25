const ONE_DAY = 24 * 60 * 60 * 1000;

export function getSunProgress({ sunrise, sunset, timezone }) {
  const nowUtc = Date.now();

  const localNow = nowUtc + (timezone * 1000);

  let localSunrise = sunrise + (timezone * 1000);
  let localSunset = sunset + (timezone * 1000);

  const dayStart = Math.floor(localNow / ONE_DAY) * ONE_DAY;
  const dayEnd = dayStart + ONE_DAY;

  // 🔥 FIX: normalize sunrise/sunset into same day window
  if (localSunrise < dayStart) localSunrise += ONE_DAY;
  if (localSunrise > dayEnd) localSunrise -= ONE_DAY;

  if (localSunset < dayStart) localSunset += ONE_DAY;
  if (localSunset > dayEnd) localSunset -= ONE_DAY;

  const total = ONE_DAY;
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