module.exports = function simulateProgress(progress, finished) {
  var i = 0;
  var interval;
  interval = setInterval(function() {
    if (i >= 100) {
      clearInterval(interval);
    }
    else {
      i += 5;
      progress(i);
    }
  }, 100);
};
