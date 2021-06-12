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
    image: '../../assets/img/Aileen.png',
    banner: '../../assets/img/AileenBanner.png',
    description:
      'Aileen is depending on the powers of the occult and a big cup of coffee to guarantee her victory!',
    head: 'fang',
    colour: '#2B398F',
  },
  {
    name: 'Joe',
    image: '../../assets/img/Joe.png',
    banner: '../../assets/img/JoeBanner.png',
    description:
      'Joe is completely fueled by carbs and promises ramen to all his supporters.',
    head: 'sand-worm',
    colour: '#930318',
  },
  {
    name: 'Chris',
    image: '../../assets/img/Chris.png',
    banner: '../../assets/img/ChrisBanner.png',
    description: 'Chris is here to get comfortable and make friends.',
    head: 'beluga',
    colour: '#316000',
  },
  {
    name: 'Curtis',
    image: '../../assets/img/Curtis.png',
    banner: '../../assets/img/CurtisBanner.png',
    description: 'We all know Curtis is cursed and he has decided to own it and become the bad boy of the group.',
    head: 'evil',
    colour: '#622BAA',
  },
];
