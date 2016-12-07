var _ = require('lodash');
var data = [
    "one fish",
    "two fish",
    "red fish",
    "blue fish",
    "stuff",
    "more stuff",
    "single"
  ];


module.exports = {
  getData: function () {
    return data;
  },

  getBetterData: 
    function (isFish, isWord) {
      if (isFish) {
        var results = _.filter(data, function (item) {
          return item.indexOf('fish') !== -1;
        });
        return results;
      } else if (isWord) {
        var results = _.filter(data, function (item) {
          return item.indexOf(' ') === -1;
        });
        return results;
      }
    }
};
