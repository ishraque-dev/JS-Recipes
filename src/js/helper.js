import { async } from 'regenerator-runtime';
import { TIMEOUT_TIME } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async (API_URL, id) => {
  try {
    const response = await Promise.race([
      fetch(`${API_URL}/${id}`),
      timeout(TIMEOUT_TIME),
    ]);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
