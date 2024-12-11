const reduceToSingleDigit = (num: number): number => {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
};

const calculateLifePathNumber = (dateString: string): number => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const sum = reduceToSingleDigit(day) + 
              reduceToSingleDigit(month) + 
              reduceToSingleDigit(year);
              
  return reduceToSingleDigit(sum);
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
  
  return { 
    score, 
    description: getCompatibilityDescription(score, lifePath1, lifePath2) 
  };
};

const getCompatibilityDescription = (score: number, lifePath1: number, lifePath2: number): string => {
  if (score >= 9) {
    return `Exceptional compatibility! Your Life Path Numbers ${lifePath1} and ${lifePath2} are in perfect harmony, creating a strong foundation for a lasting relationship.`;
  }
  if (score >= 7) {
    return `Strong compatibility between Life Path Numbers ${lifePath1} and ${lifePath2}. You have great potential for growth together, with enough differences to keep things interesting.`;
  }
  if (score >= 5) {
    return `Moderate compatibility between Life Path Numbers ${lifePath1} and ${lifePath2}. While some work may be needed, your differences can create a balanced partnership.`;
  }
  return `Your Life Path Numbers ${lifePath1} and ${lifePath2} present some challenges, but these differences can lead to significant personal growth and understanding.`;
};