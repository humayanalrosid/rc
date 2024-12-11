export const getLifePathDescription = (number: number): string => {
  const descriptions: { [key: number]: string } = {
    1: "Natural born leader with strong independence and creativity. You're ambitious and original in your approach to life.",
    2: "Peace-maker and diplomat. You excel in partnerships and have natural emotional intelligence.",
    3: "Creative communicator and optimist. You bring joy to others and have natural artistic talents.",
    4: "Practical builder and organizer. You're reliable, hardworking, and create solid foundations.",
    5: "Freedom seeker and adventurer. You adapt easily to change and seek varied experiences.",
    6: "Nurturing responsible healer. You're caring, protective, and focused on harmony.",
    7: "Spiritual seeker and analyst. You're introspective and seek deeper understanding.",
    8: "Power player and material success. You have natural business acumen and leadership.",
    9: "Humanitarian and compassionate soul. You're here to serve and make a difference."
  };
  return descriptions[number] || "Invalid number";
};

export const getDestinyDescription = (number: number): string => {
  const descriptions: { [key: number]: string } = {
    1: "Your destiny is to lead and innovate. You're meant to forge new paths and inspire others.",
    2: "Your destiny involves diplomacy and cooperation. You bridge differences and create harmony.",
    3: "You're destined to express and create. Your path involves inspiring others through creativity.",
    4: "Your destiny is to build and establish. You create lasting structures and systems.",
    5: "You're destined for freedom and change. Your path involves adventure and adaptation.",
    6: "Your destiny involves nurturing and responsibility. You're meant to care for others.",
    7: "You're destined for wisdom and understanding. Your path involves deep spiritual insight.",
    8: "Your destiny involves power and abundance. You're meant to achieve material success.",
    9: "You're destined to serve humanity. Your path involves compassion and giving."
  };
  return descriptions[number] || "Invalid number";
};

export const getSoulUrgeDescription = (number: number): string => {
  const descriptions: { [key: number]: string } = {
    1: "Your heart desires independence and achievement. You're driven by the need to lead.",
    2: "Your heart yearns for harmony and connection. You seek meaningful relationships.",
    3: "Your soul craves creative expression and joy. You seek to inspire and entertain.",
    4: "Your heart desires stability and order. You seek to build something lasting.",
    5: "Your soul yearns for freedom and adventure. You seek new experiences.",
    6: "Your heart desires love and family. You seek to nurture and protect others.",
    7: "Your soul craves wisdom and truth. You seek deeper understanding.",
    8: "Your heart desires success and recognition. You seek material achievements.",
    9: "Your soul yearns to serve others. You seek to make a positive impact."
  };
  return descriptions[number] || "Invalid number";
};