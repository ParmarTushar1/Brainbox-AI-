const showlog = __DEV__; // Show logs only in development mode

export const logFunction = (...data) => {
  if (showlog) {
    if (data) {
      console.log(...data);
    } else {
      console.log('Error While Logging!');
    }
  }
};

