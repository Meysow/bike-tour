/**
 * Note: Le plugin next-intl est désactivé car nous utilisons un middleware personnalisé
 * pour gérer les routes localisées (ex: /visite-guidee-de-paris-a-velo vs /guided-bike-tour-paris).
 * Les traductions sont gérées via src/i18n/request.ts et chargées manuellement.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
