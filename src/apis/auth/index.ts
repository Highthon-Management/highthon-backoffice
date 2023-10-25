import { instance } from '..';
import { LoginRequest } from './type';

/** 이거 다 예시임~~ */
export const login = async ({ id, password }: LoginRequest) => {
  await instance.post('/login', {
    id,
    password,
  });
};
