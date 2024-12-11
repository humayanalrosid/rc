// Numerology calculation utilities
export const calculateLifePathNumber = (dateString: string): number => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const sum = reduceToSingleDigit(day) + 
              reduceToSingleDigit(month) + 
              reduceToSingleDigit(year);
              
  return reduceToSingleDigit(sum);
};

export const calculateDestinyNumber = (name: string): number => {
  const numerologyValues: { [key: string]: number } = {
    'a': 1, 'j': 1, 's': 1,
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'e': 5, 'n': 5, 'w': 5,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'i': 9, 'r': 9
  };

  const sum = name.toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reduce((acc, char) => acc + (numerologyValues[char] || 0), 0);

  return reduceToSingleDigit(sum);
};

export const calculateSoulUrgeNumber = (name: string): number => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const numerologyValues: { [key: string]: number } = {
    'a': 1, 'e': 5, 'i': 9, 'o': 6, 'u': 3
  };

  const sum = name.toLowerCase()
    .split('')
    .filter(char => vowels.includes(char))
    .reduce((acc, char) => acc + (numerologyValues[char] || 0), 0);

  return reduceToSingleDigit(sum);
};

export const calculatePersonalityNumber = (name: string): number => {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const numerologyValues: { [key: string]: number } = {
    'b': 2, 'k': 2, 't': 2,
    'c': 3, 'l': 3, 'u': 3,
    'd': 4, 'm': 4, 'v': 4,
    'f': 6, 'o': 6, 'x': 6,
    'g': 7, 'p': 7, 'y': 7,
    'h': 8, 'q': 8, 'z': 8,
    'j': 1, 's': 1,
    'n': 5, 'w': 5,
    'r': 9
  };

  const sum = name.toLowerCase()
    .split('')
    .filter(char => consonants.includes(char))
    .reduce((acc, char) => acc + (numerologyValues[char] || 0), 0);

  return reduceToSingleDigit(sum);
};

export const calculateBirthDayNumber = (dateString: string): number => {
  const date = new Date(dateString);
  return reduceToSingleDigit(date.getDate());
};

const reduceToSingleDigit = (num: number): number => {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

export const calculateCompatibility = (
  date1: string,
  date2: string
): { score: number; description: string } => {
  const lifePath1 = calculateLifePathNumber(date1);
  const lifePath2 = calculateLifePathNumber(date2);
  
  const difference = Math.abs(lifePath1 - lifePath2);
  let score = 10 - difference;
  if (lifePath1 === lifePath2) score = 10;
  
  const description = getCompatibilityDescription(score);
  
  return { score, description };
};

const getCompatibilityDescription = (score: number): string => {
  if (score >= 9) return "Exceptional compatibility! Your numbers are in perfect harmony.";
  if (score >= 7) return "Strong compatibility with great potential for growth together.";
  if (score >= 5) return "Moderate compatibility. Some work needed but promising.";
  return "Challenging compatibility. Growth opportunities through differences.";
};