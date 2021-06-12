export interface HouseInt {
  name: string;
  image: string;
  banner: string;
  description: string;
  head: string;
  colour: string;
}

export const houses: HouseInt[] = [
  {
    name: 'Aileen',
    image: 'Aileen.png',
    banner: 'AileenBanner.png',
    description:
      'Aileen is depending on the powers of the occult and a big cup of coffee to guarantee her victory!',
    head: 'fang',
    colour: '#2B398F',
  },
  {
    name: 'Joe',
    image: 'Joe.png',
    banner: 'JoeBanner.png',
    description:
      'Joe is completely fueled by carbs and promises ramen to all his supporters.',
    head: 'sand-worm',
    colour: '#930318',
  },
  {
    name: 'Chris',
    image: 'Chris.png',
    banner: 'ChrisBanner.png',
    description: 'Chris is here to get comfortable and make friends.',
    head: 'beluga',
    colour: '#316000',
  },
  {
    name: 'Curtis',
    image: 'Curtis.png',
    banner: 'CurtisBanner.png',
    description: 'We all know Curtis is cursed and he has decided to own it and become the bad boy of the group.',
    head: 'evil',
    colour: '#622BAA',
  },
];
