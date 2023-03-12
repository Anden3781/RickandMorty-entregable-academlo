export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  const amplitudeRandom = Math.random() * amplitude;

  return min + Math.round(amplitudeRandom);
};
