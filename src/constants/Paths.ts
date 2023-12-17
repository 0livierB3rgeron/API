/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Villes: {
    Base: '/villes',
    Get: '/',
    GetOne: '/:nom',
    Add: '/',
    Update: '/',
    Delete: '/delete/:id',
  },
} as const;
