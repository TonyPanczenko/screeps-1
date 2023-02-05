import axios from 'axios';
import dotenv from 'dotenv';
import fse from 'fs-extra';

dotenv.config({ path: '.env.local' });

async function deploy() {
  try {
    const code = fse.readFileSync('dist/app.js', { encoding: 'utf-8' });
    const data = {
      branch: 'develop',
      modules: {
        main: code,
      },
    };

    await axios.post(
      process.env.API_URL,
      data,
      {
        headers: {
          'X-Token': process.env.TOKEN,
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );

    console.log('# Successfully deployed to Screeps Server');
  } catch (e) {
    console.log(`# Failed to deploy bundle to Screeps Server: ${e.message}`);
  }
}

deploy();
