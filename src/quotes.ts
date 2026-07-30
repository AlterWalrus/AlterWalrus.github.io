export interface Quote {
  text: string;
  artist: string;
  song: string;
  year: number;
}

export const QUOTES: Quote[] = [
  { text: "And in the end, the love you take is equal to the love you make.", artist: "The Beatles", song: "The End", year: 1969 },
  { text: "There's nowhere you can be that isn't where you're meant to be.", artist: "The Beatles", song: "All You Need Is Love", year: 1967 },
  { text: "Living is easy with eyes closed, misunderstanding all you see.", artist: "The Beatles", song: "Strawberry Fields Forever", year: 1967 },
  { text: "Take a sad song and make it better.", artist: "The Beatles", song: "Hey Jude", year: 1968 },
  { text: "Words are flowing out like endless rain into a paper cup.", artist: "The Beatles", song: "Across the Universe", year: 1969 },
  { text: "Whisper words of wisdom, let it be.", artist: "The Beatles", song: "Let It Be", year: 1970 },
  { text: "Here comes the sun, and I say, it's all right.", artist: "The Beatles", song: "Here Comes the Sun", year: 1969 },
  { text: "I get high with a little help from my friends.", artist: "The Beatles", song: "With a Little Help from My Friends", year: 1967 },
  { text: "Limitless undying love which shines around me like a million suns.", artist: "The Beatles", song: "Across the Universe", year: 1969 },
  { text: "Think for yourself 'cause I won't be there with you.", artist: "The Beatles", song: "Think for Yourself", year: 1965 },
  { text: "I am the walrus, goo goo g'joob.", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "Yellow matter custard, dripping from a dead dog's eye.", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "Expert texpert choking smokers, don't you think the joker laughs at you?", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "Semolina pilchard, climbing up the Eiffel Tower.", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "Mister City Policeman sitting pretty little policemen in a row.", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "He wear no shoeshine, he got toe-jam football.", artist: "The Beatles", song: "Come Together", year: 1969 },
  { text: "He got monkey finger, he shoot Coca-Cola.", artist: "The Beatles", song: "Come Together", year: 1969 },
  { text: "He got walrus gumboot, he got Ono sideboard.", artist: "The Beatles", song: "Come Together", year: 1969 },
  { text: "He say 'One and one and one is three.'", artist: "The Beatles", song: "Come Together", year: 1969 },
  { text: "Picture yourself in a boat on a river with tangerine trees and marmalade skies.", artist: "The Beatles", song: "Lucy in the Sky with Diamonds", year: 1967 },
  { text: "Somebody calls you, you answer quite slowly, a girl with kaleidoscope eyes.", artist: "The Beatles", song: "Lucy in the Sky with Diamonds", year: 1967 },
  { text: "Cellophane flowers of yellow and green, towering over your head.", artist: "The Beatles", song: "Lucy in the Sky with Diamonds", year: 1967 },
  { text: "Pooling the feathers of a chimney sweep, waiting for the train to come.", artist: "The Beatles", song: "Savoy Truffle", year: 1968 },
  { text: "Crème tangerine and montelimart, a ginger sling with a pineapple heart.", artist: "The Beatles", song: "Savoy Truffle", year: 1968 },
  { text: "Cool cherry cream, nice apple tart, I bet you wish you could eat it right up.", artist: "The Beatles", song: "Savoy Truffle", year: 1968 },
  { text: "Got a good thing going, going to keep it all the time.", artist: "The Beatles", song: "Good Day Sunshine", year: 1966 },
  { text: "We all live in a yellow submarine, a yellow submarine, a yellow submarine.", artist: "The Beatles", song: "Yellow Submarine", year: 1966 },
  { text: "And our friends are all on board, many more of them live next door.", artist: "The Beatles", song: "Yellow Submarine", year: 1966 },
  { text: "Number nine, number nine, number nine, number nine.", artist: "The Beatles", song: "Revolution 9", year: 1968 },
  { text: "The watusi, the twist, the el toro, the ping pong.", artist: "The Beatles", song: "Free as a Bird", year: 1995 },
  { text: "She's a big teaser, she took me home to her place, room's got a big freezer.", artist: "The Beatles", song: "I'm So Tired", year: 1968 },
  { text: "I'd love to turn you on.", artist: "The Beatles", song: "A Day in the Life", year: 1967 },
  { text: "Woke up, got out of bed, dragged a comb across my head.", artist: "The Beatles", song: "A Day in the Life", year: 1967 },
  { text: "Found my way downstairs and drank a cup, and somebody spoke and I went into a dream.", artist: "The Beatles", song: "A Day in the Life", year: 1967 },
  { text: "Four thousand holes in Blackburn, Lancashire, and though the holes were rather small, they had to count them all.", artist: "The Beatles", song: "A Day in the Life", year: 1967 },
  { text: "Now they know how many holes it takes to fill the Albert Hall.", artist: "The Beatles", song: "A Day in the Life", year: 1967 },
  { text: "Jojo left his home in Tucson, Arizona for some California grass.", artist: "The Beatles", song: "Get Back", year: 1969 },
  { text: "Do you want to know a secret? Do you promise not to tell?", artist: "The Beatles", song: "Do You Want to Know a Secret", year: 1963 },
  { text: "Bungalow Bill, what did you kill, Bungalow Bill?", artist: "The Beatles", song: "The Continuing Story of Bungalow Bill", year: 1968 },
  { text: "He went out tiger hunting with his elephant and gun.", artist: "The Beatles", song: "The Continuing Story of Bungalow Bill", year: 1968 },
  { text: "Ob-la-di, ob-la-da, life goes on, bra, la-la, how the life goes on.", artist: "The Beatles", song: "Ob-La-Di, Ob-La-Da", year: 1968 },
  { text: "Desmond has a barrow in the marketplace, Molly is the singer in a band.", artist: "The Beatles", song: "Ob-La-Di, Ob-La-Da", year: 1968 },
  { text: "Happiness is a warm gun, bang bang, shoot shoot.", artist: "The Beatles", song: "Happiness Is a Warm Gun", year: 1968 },
  { text: "Mother Superior jumped the gun.", artist: "The Beatles", song: "Happiness Is a Warm Gun", year: 1968 },
  { text: "Why don't we do it in the road?", artist: "The Beatles", song: "Why Don't We Do It in the Road?", year: 1968 },
  { text: "I am the egg man, they are the egg men, I am the walrus, goo goo g'joob.", artist: "The Beatles", song: "I Am the Walrus", year: 1967 },
  { text: "Roll up, roll up for the mystery tour.", artist: "The Beatles", song: "Magical Mystery Tour", year: 1967 },
  { text: "Though I know I'll never lose affection for people and things that went before, I know I'll often stop and think about them.", artist: "The Beatles", song: "In My Life", year: 1965 },
  { text: "All the lonely people, where do they all come from?", artist: "The Beatles", song: "Eleanor Rigby", year: 1966 },
  { text: "Turn off your mind, relax and float downstream, it is not dying.", artist: "The Beatles", song: "Tomorrow Never Knows", year: 1966 },
  { text: "There are places I'll remember all my life, though some have changed.", artist: "The Beatles", song: "In My Life", year: 1965 },
  { text: "When I find myself in times of trouble, Mother Mary comes to me.", artist: "The Beatles", song: "Let It Be", year: 1970 },
  { text: "Love is old, love is new, love is all, love is you.", artist: "The Beatles", song: "Because", year: 1969 },
  { text: "To see a world in a grain of sand, and a heaven in a wild flower.", artist: "The Beatles", song: "The Inner Light", year: 1968 },
];


export function getQuoteOfTheDay(): Quote {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const dateSeed = year * 420 + month * 69 + day;
  const index = dateSeed % QUOTES.length;

  return QUOTES[index];
}