import { env } from '~/config/environment'
// Domains that are allowed to access the API
export const WHITELIST_DOMAINS = ['https://todolist-web-fe.vercel.app']

export const WEBSITE_DOMAIN =
  env.BUILD_MODE === 'dev'
    ? env.WEBSITE_DOMAIN_DEVELOPMENT
    : env.WEBSITE_DOMAIN_PRODUCTION
