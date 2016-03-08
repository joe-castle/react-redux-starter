'use strict';

module.exports = () => {
  const mongoose = require('mongoose');
  const streamersSchema = mongoose.Schema({
    streamers: Array
  });
  const _model = mongoose.model('Streamers', streamersSchema);

  return {
    schema: streamersSchema,
    model: _model
  };
}();
