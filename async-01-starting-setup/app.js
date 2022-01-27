const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (sucess) => {
        resolve(sucess);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};
const setTimer = async (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  //let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // });
  // setTimer(1000).then(() => {
  //   console.log('Timer Done!');
  // });

  // console.log('Getting position...');
}

// Promise.race([getPosition(), setTimer(1000)]).then((data) => {
//   console.log(data);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});

button.addEventListener('click', trackUserHandler);
