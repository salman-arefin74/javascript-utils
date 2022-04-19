var splitString = function(s, k) {
  return s.match(new RegExp('.{1,' + k + '}', 'g'));
};