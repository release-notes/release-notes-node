'use strict';

const fs = require('fs');
const jsYaml = require('js-yaml');

class ReleaseNotesWriter {
  writeReleaseNotesFile(filePath, releaseNotes, callback) {
    try {
      const releaseNotesDocument = jsYaml.safeDump(releaseNotes.toJSON());

      fs.writeFile(filePath, releaseNotesDocument, { encoding: 'utf8' }, (err) => {
        if (err) {
          return void callback(err);
        }

        callback();
      });
    } catch (err) {
      callback(err);
    }

    return this;
  }
}

module.exports = ReleaseNotesWriter;
