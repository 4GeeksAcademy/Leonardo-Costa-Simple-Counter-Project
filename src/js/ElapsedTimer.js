import React, { useState, useEffect } from 'react';

const ElapsedTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h2>Elapsed Time: {formatTime(elapsedTime)}</h2>
    </div>
  );
};

const CountdownTimer = () => {
  const [duration, setDuration] = useState(60); // Initial duration in seconds
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    let intervalId;

    if (remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setDuration(newDuration);
    setRemainingTime(newDuration);
  };

  return (
    <div>
      <div>
        <h3>Duration (in seconds): </h3>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <div>
        <h2>Remaining Time: {remainingTime} seconds</h2>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ElapsedTimer />
      <CountdownTimer />
    </div>
  );
};

export default App;
