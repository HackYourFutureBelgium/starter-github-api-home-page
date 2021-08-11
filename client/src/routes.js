import { home } from './components/pages/home/index.js';
import { quiz } from './components/pages/quiz/index.js';
import { questions } from './components/pages/questions/index.js';

/**
 * Defines the route URLs, names and callbacks.
 *
 * @exports routes
 */

export const routes = [
  {
    name: 'home', // what to the user reads in the navbar
    path: `/`, // the URL path
    page: home, // the page component to render
  },
  {
    name: 'quiz',
    path: `/quiz`,
    page: quiz,
  },
  {
    name: 'questions',
    path: `/questions`,
    page: questions,
  },
];
