import React, {useState} from 'react';
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
const worker = new Worker(URL.createObjectURL(blob));

const runWorker = () => {
    return new Promise(resolve => {
        console.log('START');
        const worker = new Worker('worker.js');
        worker.addEventListener('message', result => {
            console.log('END');
            worker.terminate();
            resolve(result.data);
        });
        worker.postMessage('fetch users');
    })
};



const WorkerButton = () => {
    const [time, setTime] = useState(0);

    const onClick = () => {
        const start = Date.now();
        setTime(-1);

        const workers = [];
        for (let i = 0; i < 32; i++) {
            workers.push(runWorker());
        }

        Promise.all(workers).then(results => {
            console.log('ALL FINISHED!');
            console.log(results);
            console.log("Time: " + ((Date.now() - start) / 1000) + ' s');
            setTime((Date.now() - start) / 1000);
        });
    };

    return (
        <>
            <button onClick={onClick}>Run</button>
            <h1>{"Threads: 32, Time " + time + ' s'}</h1>
        </>
    );
};

export default WorkerButton;
