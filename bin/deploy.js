import axios from 'axios';
import dotenv from 'dotenv';
import fse from 'fs-extra';

dotenv.config({ path: '../.env.local' });

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

try {
  const code = fse.readFileSync('../dist/app.js', { encoding: 'utf-8' });
  const data = {
    branch: 'default',
    modules: {
      'main.js': code,
    },
  };

  axios.post(
    process.env.API_URL,
    data,
    {
      auth: `${email}:${password}`,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );
} catch (e) {
  console.log(`# Failed to deploy bundle to Screeps Server: ${e.message}`);
}
