const cinquePerDieci = 5;
const cinquePerZero = 0;
 
try {
  const result = cinquePerDieci / cinquePerZero;
  console.log(`divisione di cinque`);
} catch (cinque) {
  console.error(cinque);
}

try {
    const result = cinquePerDieci * cinquePerZero;
    console.log(`multipli di cinque`);
  } catch (cinque) {
    console.warn(cinque);
  }