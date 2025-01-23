import { spawn } from 'child_process';
import { platform } from 'os';
import {ROOT_PATH} from '../src/utils'

const regex = /ws:\/\/localhost:\d+\/[a-f0-9]+/;
const py = platform() === 'darwin' ? 'python3' : 'python';
const pythonProcess = spawn(py, [`${ROOT_PATH}/browser/bootstrap.py`]);


pythonProcess.stdout.on('data', (data) => {
    const dataString = data.toString();  
    const match = dataString.match(regex);
    if (match) {
      const extractedString = match[0];  
      console.log(`${extractedString}`);
    } else {
      console.log('none');
    }
  });
  

pythonProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

pythonProcess.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

// pythonProcess.kill();



// const currentDirectory = path.resolve(__dirname);
console.log(`${ROOT_PATH}/browser/bootstrap.py`);