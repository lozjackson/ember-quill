/* eslint-env node */
"use strict";

module.exports = {
  name: "ember-quill",
  options: {
    nodeAssets: {
      quill: function() {
        if (process.env.EMBER_CLI_FASTBOOT) {
          return {};
        }
        else {
          return {
            import: [
              'dist/quill.min.js',
              'dist/quill.min.js.map',
              'dist/quill.snow.css',
            ],
          };
        }
      },
      'quill-image-drop-module': function() {
        if (process.env.EMBER_CLI_FASTBOOT) {
          return {};
        }
        else {
          return {
            import: [
              'image-drop.min.js',
            ],
          };
        }
      },
      'quill-image-resize-module': function() {
        if (process.env.EMBER_CLI_FASTBOOT) {
          return {};
        }
        else {
          return {
            import: [
              'image-resize.min.js',
            ],
          };
        }
      }
    }
  },
  isDevelopingAddon: function() {
    return true;
  }
};
