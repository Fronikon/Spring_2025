import { setupServer } from 'msw/node';
import { handlers } from './photoApiMock';

export const server = setupServer(...handlers);
