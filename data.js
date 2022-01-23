const customData = [
  {
    id: '1',
    firstName: 'Allan',
    lastName: 'Munger',
    job: 'Sales',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/AllanMunger.png'),
  },
  {
    id: '2',
    firstName: 'Amanda',
    lastName: 'Brady',
    job: 'Lawyer',
    about:
      'Lacus sed turpis tincidunt id aliquet risus feugiat. Quis risus sed vulputate odio. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Odio facilisis mauris sit amet massa vitae tortor condimentum. Urna neque viverra justo nec ultrices dui sapien. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Laoreet id donec ultrices tincidunt arcu non. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Feugiat vivamus at augue eget arcu dictum varius duis at.',
    image: require('./src/assets/images/AmandaBrady.png'),
  },
  {
    id: '3',
    firstName: 'Ashley',
    lastName: 'Mc Carthy',
    job: 'Painter',
    about:
      'Et netus et malesuada fames ac turpis egestas. In eu mi bibendum neque egestas congue quisque egestas. Amet commodo nulla facilisi nullam. Sollicitudin tempor id eu nisl nunc mi. Sed ullamcorper morbi tincidunt ornare massa. Nam at lectus urna duis convallis convallis tellus. Tristique senectus et netus et. Aliquet nibh praesent tristique magna sit amet purus. Tortor id aliquet lectus proin nibh. Urna condimentum mattis pellentesque id nibh tortor id. Varius morbi enim nunc faucibus a pellentesque sit amet. Condimentum vitae sapien pellentesque habitant. Cursus mattis molestie a iaculis at erat. Ut consequat semper viverra nam libero. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Gravida neque convallis a cras semper auctor neque. Facilisis gravida neque convallis a.',
    image: require('./src/assets/images/AshleyMcCarthy.png'),
  },
  {
    id: '4',
    firstName: 'Carlos',
    lastName: 'Slattery',
    job: 'Developer',
    about:
      'Laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id interdum velit laoreet id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Accumsan tortor posuere ac ut consequat semper viverra. Sed blandit libero volutpat sed cras. Lacus vestibulum sed arcu non. In metus vulputate eu scelerisque felis imperdiet. Ornare massa eget egestas purus viverra accumsan. Sit amet volutpat consequat mauris nunc congue nisi vitae. Turpis tincidunt id aliquet risus feugiat in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.',
    image: require('./src/assets/images/CarlosSlattery.png'),
  },
  {
    id: '5',
    firstName: 'Carole',
    lastName: 'Poland',
    job: 'Golfer',
    about:
      'Laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id interdum velit laoreet id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Accumsan tortor posuere ac ut consequat semper viverra. Sed blandit libero volutpat sed cras. Lacus vestibulum sed arcu non. In metus vulputate eu scelerisque felis imperdiet. Ornare massa eget egestas purus viverra accumsan. Sit amet volutpat consequat mauris nunc congue nisi vitae. Turpis tincidunt id aliquet risus feugiat in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.',
    image: require('./src/assets/images/CarolePoland.png'),
  },
  {
    id: '6',
    firstName: 'Cecil',
    lastName: 'Folk',
    job: 'Nurse',
    about:
      'Laoreet sit amet cursus sit. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id interdum velit laoreet id. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Accumsan tortor posuere ac ut consequat semper viverra. Sed blandit libero volutpat sed cras. Lacus vestibulum sed arcu non. In metus vulputate eu scelerisque felis imperdiet. Ornare massa eget egestas purus viverra accumsan. Sit amet volutpat consequat mauris nunc congue nisi vitae. Turpis tincidunt id aliquet risus feugiat in. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.',
    image: require('./src/assets/images/CecilFolk.png'),
  },
  {
    id: '7',
    firstName: 'Celeste',
    lastName: 'Burton',
    job: 'Janitor',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/CelesteBurton.png'),
  },
  {
    id: '8',
    firstName: 'Charlotte',
    lastName: 'Waltson',
    job: 'Fireman',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/CharlotteWaltson.png'),
  },
  {
    id: '9',
    firstName: 'Colin',
    lastName: 'Ballinger',
    job: 'Musician',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/ColinBallinger.png'),
  },
  {
    id: '10',
    firstName: 'Daisy',
    lastName: 'Phillips',
    job: 'Electrician',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/DaisyPhillips.png'),
  },
  {
    id: '11',
    firstName: 'Elliot',
    lastName: 'Woodward',
    job: 'Movie Director',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/ElliotWoodward.png'),
  },
  {
    id: '12',
    firstName: 'Elvia',
    lastName: 'Atkins',
    job: 'Actor',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/ElviaAtkins.png'),
  },
  {
    id: '13',
    firstName: 'Erik',
    lastName: 'Nason',
    job: 'Bouncer',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/ErikNason.png'),
  },
  {
    id: '14',
    firstName: 'Henry',
    lastName: 'Brill',
    job: 'Wrestler',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/HenryBrill.png'),
  },
  {
    id: '15',
    firstName: 'Isaac',
    lastName: 'Fielder',
    job: 'Human Resource',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/IsaacFielder.png'),
  },
  {
    id: '16',
    firstName: 'Johnie',
    lastName: 'McConnell',
    job: 'Reporter',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/JohnieMcConnell.png'),
  },
  {
    id: '17',
    firstName: 'Kat',
    lastName: 'Larsson',
    job: 'Youtuber',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/Katlarsson.png'),
  },
  {
    id: '18',
    firstName: 'Katri',
    lastName: 'Ahokas',
    job: 'Singer',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/KatriAhokas.png'),
  },
  {
    id: '19',
    firstName: 'Kevin',
    lastName: 'Sturgis',
    job: 'Cop',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/KevinSturgis.png'),
  },
  {
    id: '20',
    firstName: 'Kristin',
    lastName: 'Patterson',
    job: 'President',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/KristinPatterson.png'),
  },
  {
    id: '21',
    firstName: 'Lydia',
    lastName: 'Bauer',
    job: 'FBI',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/LydiaBauer.png'),
  },
  {
    id: '22',
    firstName: 'Mauricio',
    lastName: 'August',
    job: 'Driver',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/MauricioAugust.png'),
  },
  {
    id: '23',
    firstName: 'Miguel',
    lastName: 'Garcia',
    job: 'Product Manager',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/MiguelGarcia.png'),
  },
  {
    id: '24',
    firstName: 'Mona',
    lastName: 'Kane',
    job: 'QA',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/MonaKane.png'),
  },
  {
    id: '25',
    firstName: 'Robert',
    lastName: 'Tolbert',
    job: 'Doctor',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/RobertTolbert.png'),
  },
  {
    id: '26',
    firstName: 'Robin',
    lastName: 'Counts',
    job: 'Student',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/RobinCounts.png'),
  },
  {
    id: '27',
    firstName: 'Tim',
    lastName: 'Deboer',
    job: 'Writer',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/TimDeboer.png'),
  },
  {
    id: '28',
    firstName: 'Wanda',
    lastName: 'Howard',
    job: 'Engineer',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('./src/assets/images/WandaHoward.png'),
  },
];

export default customData;
