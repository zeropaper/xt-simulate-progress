module.exports = function simulateProgress(progress, finished) {
  var i = 0;
  var interval;
  interval = setInterval(function() {
    if (i >= 1) {
      clearInterval(interval);
    }
    else {
      i += 0.1;
      progress(i);
    }
  }, 100);
};
