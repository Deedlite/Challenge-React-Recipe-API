import slugify from 'slugify';

export const recipeSlug = recipeName => slugify(recipeName, { lower: true });

// Implémentation impérative de l'utilitaire.
export const recipeUrl = recipeName => `/recipe/${recipeSlug(recipeName)}`;
