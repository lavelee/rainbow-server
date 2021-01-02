import production from '../.config.json';

export default {
  ...production,
  PORT: process.env.PORT || 4000,
}