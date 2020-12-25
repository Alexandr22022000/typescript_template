import React from 'react';
import axios from "axios";

const workerFn = () => {
    /* eslint-disable-next-line no-restricted-globals */
    self.addEventListener('message', e => {
        console.log("AAAAAAAA");
        console.log(e.data);
        // @ts-ignore
        postMessage('Result');
    });
};

const code = workerFn.toString();
const blob = new Blob(['('+code+')()']);
const worker = new Worker('http://localhost:3000/worker.js');

const runWorker = () => {
    return new Promise(resolve => {
        console.log('START');
        const worker = new Worker('http://localhost:3000/worker.js');
        worker.addEventListener('message', result => {
            console.log('END');
            resolve(result.data);
        });
        worker.postMessage('fetch users');
    })
};



const WorkerButton = () => {
const onClick = () => {
    const start = Date.now();

    const workers = [];
    for (let i = 0; i < 32; i++) {
        workers.push(runWorker());
    }

    Promise.all(workers).then(results => {
        console.log('ALL FINISHED!');
        console.log(results);
        console.log("Time: " + ((Date.now() - start) / 1000) + ' s');
    });
};

const upload = () => {
    const start = Date.now();
    axios.get('http://localhost:5000/dataset')
        .then((response) => {
            console.log(response);
            console.log('Got: ' + ((Date.now() - start) / 1000) + ' s');
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

return (
    <>
        <button onClick={onClick}>Run</button>
        <button onClick={upload}>Upload</button>
    </>
);
};

export default WorkerButton;
