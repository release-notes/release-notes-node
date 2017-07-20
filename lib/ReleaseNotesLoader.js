'use strict';

const fs = require('fs');
const jsYaml = require('js-yaml');
const ReleaseNotes = require('./models/ReleaseNotes');
const ReleaseNotesValidator = require('./ReleaseNotesValidator');

class ReleaseNotesLoader {
  readReleaseNotesFile(file, callback) {
    fs.readFile(file, { encoding: 'utf8' }, (err, content) => {
      if (err) {
        return void callback(err);
      }

      this.loadReleaseNotes(content, callback);
    });

    return this;
  }

  loadReleaseNotes(content, callback) {
    try {
      const document = jsYaml.safeLoad(content, {
        schema: jsYaml.FAILSAFE_SCHEMA,
      });

      this.createReleaseNotesFromDocument(document, callback);
    } catch (e) {
      callback(e);
    }

    return this;
  }

  createReleaseNotesFromDocument(document, callback) {
    const validationResult = ReleaseNotesValidator.validateReleaseNotes(document);

    if (validationResult.isValid === false) {
      const validationError = new Error('Invalid release notes format.');

      validationError.isValidationError = true;
      validationError.validationErrors = validationResult.errors;

      callback(validationError);

      return this;
    }

    const releaseNotes = ReleaseNotes.fromJSON(document);

    callback(null, releaseNotes);

    return this;
  }
}

module.exports = ReleaseNotesLoader;
