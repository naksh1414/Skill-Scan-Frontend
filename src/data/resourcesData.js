// Import icons for each domain
import { FaGlobe, FaBrain, FaAndroid, FaMicrochip, FaBook, FaPython, FaCloud } from 'react-icons/fa';

export const studyResources = [
  {
    id: 1,
    domain: 'Web Development',
    icon: FaGlobe,
    description: 'Build modern websites and web applications from front to back.',
    playlists: [
      {
        id: 101,
        title: 'Namaste JavaScript',
        creator: 'by Akshay Saini',
        description: 'A deep dive into the core concepts of JavaScript, from basics to advanced.',
        url: 'https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccwNP9',
        thumbnail: 'https://i.ytimg.com/vi/pN6k1bA_P0g/hq720.jpg', // First video thumbnail
      },
      {
        id: 102,
        title: 'Complete Backend Development (Node.js/Express)',
        creator: 'by Piyush Garg',
        description: 'Master backend technologies and system design principles with this comprehensive series.',
        url: 'https://www.youtube.com/playlist?list=PL-J2q3Ga50oMVy3Hjef-1qP2LSOa2Yh4A',
        thumbnail: 'https://i.ytimg.com/vi/bX7kR0xQ_tQ/hq720.jpg', // First video thumbnail
      },
      {
        id: 103,
        title: 'React JS Tutorial for Beginners',
        creator: 'by Codevolution',
        description: 'Learn the fundamentals of React to build dynamic user interfaces.',
        url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
        thumbnail: 'https://i.ytimg.com/vi/QFaFIcGhPoM/hq720.jpg',
      },
      {
        id: 104,
        title: 'HTML & CSS Course for Beginners',
        creator: 'by freeCodeCamp.org',
        description: 'Learn to build beautiful websites from scratch with HTML and CSS.',
        url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVunFS7P7_w14R_H2p2y_z_4f5',
        thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/hq720.jpg',
      },
      {
        id: 105,
        title: 'TypeScript Crash Course',
        creator: 'by Traversy Media',
        description: 'Understand TypeScript fundamentals and how to integrate it with JavaScript projects.',
        url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbsK4WpQzdaOHLSA_gYqM7s',
        thumbnail: 'https://i.ytimg.com/vi/r-F9R_p2vS0/hqdefault.jpg',
      },
    ],
  },
  {
    id: 2,
    domain: 'Data Structures & Algorithms',
    icon: FaBook ,
    description: 'Strengthen your problem-solving foundations for technical interviews.',
    playlists: [
      {
        id: 201,
        title: 'DSA for Placements',
        creator: 'by Kunal Kushwaha',
        description: 'An extensive bootcamp covering all essential DSA topics required for interviews.',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
        thumbnail: 'https://i.ytimg.com/vi/rZlYvF6gL8Q/hq720.jpg',
      },
      {
        id: 202,
        title: 'C++ STL Series',
        creator: 'by Love Babbar',
        description: 'Master the Standard Template Library in C++ for competitive programming.',
        url: 'https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4PprqvgL6A',
        thumbnail: 'https://i.ytimg.com/vi/v2Xz_gYxG0A/hq720.jpg',
      },
    ],
  },
  {
    id: 3,
    domain: 'Artificial Intelligence & ML',
    icon: FaBrain,
    description: 'Explore the world of intelligent systems, data, and algorithms.',
    playlists: [
      {
        id: 301,
        title: 'Complete Machine Learning Playlist',
        creator: 'by Krish Naik',
        description: 'Learn everything about ML, from statistics to building complete models.',
        url: 'https://www.youtube.com/playlist?list=PLZoP-8a7k0-QST75s20o2a51v-m9pB2rW',
        thumbnail: 'https://i.ytimg.com/vi/i_LwzVn_Ml8/hq720.jpg',
      },
      {
        id: 302,
        title: 'Deep Learning Specialization',
        creator: 'by deeplearning.ai',
        description: 'A world-class specialization covering the foundations of deep learning.',
        url: 'https://www.youtube.com/playlist?list=PLoROMvodXzJtK1fXyC3OUrja_1XoT6o0Y', // This is for Course 1 of the spec
        thumbnail: 'https://i.ytimg.com/vi/d_dwZlG0204/hq720.jpg',
      },
       {
        id: 303,
        title: 'Natural Language Processing (NLP)',
        creator: 'by Sentdex',
        description: 'Introduction to Natural Language Processing with Python.',
        url: 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDf2ms8fFzgwJqR2PCHlRKjA',
        thumbnail: 'https://i.ytimg.com/vi/FLZvN5g3z3k/hq720.jpg',
      },
    ],
  },
  {
    id: 4,
    domain: 'Android Development',
    icon: FaAndroid,
    description: 'Build native applications for the world\'s most popular mobile OS.',
    playlists: [
      {
        id: 401,
        title: 'Android Development for Beginners',
        creator: 'by Philipp Lackner',
        description: 'A modern guide to Android app development with Kotlin.',
        url: 'https://www.youtube.com/playlist?list=PLQkwcJG4YTCkeITH28i7p3z5f21f_42pY',
        thumbnail: 'https://i.ytimg.com/vi/fG3wzE1nL9w/hq720.jpg',
      },
      {
        id: 402,
        title: 'Jetpack Compose Tutorial',
        creator: 'by freeCodeCamp.org',
        description: 'Learn the modern declarative UI toolkit for Android.',
        url: 'https://www.youtube.com/watch?v=Ev9XhH82n6E', // This is a long single video
        thumbnail: 'https://i.ytimg.com/vi/Ev9XhH82n6E/hq720.jpg',
      },
    ],
  },
  {
    id: 5,
    domain: 'Internet of Things (IoT)',
    icon: FaMicrochip ,
    description: 'Connect the physical and digital worlds with embedded systems.',
    playlists: [
      {
        id: 501,
        title: 'IoT Tutorial for Beginners',
        creator: 'by Great Learning',
        description: 'Introduction to IoT concepts, architecture, and applications.',
        url: 'https://www.youtube.com/playlist?list=PLUaB-1hjhk8HAyvL7hY9xW1xN104-e5oQ',
        thumbnail: 'https://i.ytimg.com/vi/t89_M3L_k7g/hq720.jpg',
      },
      {
        id: 502,
        title: 'Arduino Programming Tutorial',
        creator: 'by Paul McWhorter',
        description: 'Learn to program Arduino for various IoT projects.',
        url: 'https://www.youtube.com/playlist?list=PLGs0VKm2D3z8dnqK80l1I32t1g0R3-VbH',
        thumbnail: 'https://i.ytimg.com/vi/kL4vF-f5i9E/hq720.jpg',
      },
    ],
  },
  {
    id: 6,
    domain: 'Python Programming',
    icon: FaPython ,
    description: 'Master the versatile language for web, data science, and automation.',
    playlists: [
      {
        id: 601,
        title: 'Python for Everybody',
        creator: 'by Charles Severance',
        description: 'A complete Python course for beginners, highly recommended for foundations.',
        url: 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDe8dZoM_2DlkJtuaRQrJpbe', // Part of a larger course
        thumbnail: 'https://i.ytimg.com/vi/h2H7X1dJ1uU/hq720.jpg',
      },
      {
        id: 602,
        title: 'Automate the Boring Stuff with Python',
        creator: 'by Al Sweigart',
        description: 'Learn practical automation skills with Python for everyday tasks.',
        url: 'https://www.youtube.com/playlist?list=PL0-84-PJ-QcGE6_pmnbM9M4jNtsL1W9oW',
        thumbnail: 'https://i.ytimg.com/vi/C_9-hMTgQ1I/hq720.jpg',
      },
    ],
  },
  {
    id: 7,
    domain: 'Cloud Computing',
    icon: FaCloud ,
    description: 'Learn about cloud platforms, services, and deployment strategies.',
    playlists: [
      {
        id: 701,
        title: 'AWS Certified Cloud Practitioner',
        creator: 'by freeCodeCamp.org',
        description: 'Prepare for the AWS Cloud Practitioner certification with this comprehensive course.',
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc', // A single long video course
        thumbnail: 'https://i.ytimg.com/vi/SOTamWNgDKc/hq720.jpg',
      },
      {
        id: 702,
        title: 'Azure Full Course for Beginners',
        creator: 'by Simplilearn',
        description: 'Get started with Microsoft Azure cloud services.',
        url: 'https://www.youtube.com/watch?v=N_o7e7N2W20', // A single long video
        thumbnail: 'https://i.ytimg.com/vi/N_o7e7N2W20/hq720.jpg',
      },
    ],
  },
];