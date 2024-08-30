import { APP } from '@app/constants';

export const APP_ENV = import.meta.env.VITE_CLIENT_ENV || APP.STATUS.DEVELOPMENT;
