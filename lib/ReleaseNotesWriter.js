'use strict';

const fs = require('fs');
const jsYaml = require('js-yaml');

/**
 * Class for writing release notes to a file.
 */
class ReleaseNotesWriter {
  /**
   * Dump a release notes instance into a file.
   *
   * @example <caption>Write release notes to a file</caption>
   * <code>
   *   const releaseNotesWriter = new ReleaseNotesWriter();
   *   const releaseNotes = new ReleaseNotes({ title: 'My Notes' });
   *
   *   releaseNotesWriter.writeReleaseNotesFile('./release-notes.yml', releaseNotes, (err) => {
   *     if (err) {
   *       return void console.error('Could not write release notes to file', err);
   *     }
   *
   *     console.info('Release notes have been successfully written to file.');
   *   });
   * </code>
   *
   * @param {string} filePath
   * @param {ReleaseNotes} releaseNotes
   * @param {function} callback
   * @return {ReleaseNotesWriter}
   */
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

  static dumpReleaseNotes(releaseNotes) {
    return jsYaml.safeDump(releaseNotes.toJSON());
  }
}

module.exports = ReleaseNotesWriter;
