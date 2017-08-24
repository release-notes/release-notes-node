# Release Notes Node

[![NPM Package](https://img.shields.io/npm/v/@release-notes/node.svg)](https://www.npmjs.com/package/@release-notes/node)
[![Build Status](https://travis-ci.org/release-notes/release-notes-node.svg?branch=master)](https://travis-ci.org/release-notes/release-notes-node)
[![MIT license](https://img.shields.io/github/license/release-notes/release-notes-node.svg)](LICENSE)

**Title**   | Release Notes Node
:-----------|:---------------------------
**Specification** | [Release Notes Draft 0.2.0](https://github.com/release-notes/release-notes-spec/blob/0.2.0/README.md)
**Author**  | [Alrik Zachert](https://github.com/alrik)
**License** | MIT

The goal of this repository is to provide a reference implementation
of the [Release Notes Specification](https://github.com/release-notes/release-notes-spec).

## Installation

`$ npm i @release-notes/node`

## Load A Release Notes File

```js
const ReleaseNotesLoader = require('@release-notes/node/lib/ReleaseNotesLoader');
const loader = new ReleaseNotesLoader();

loader.readReleaseNotesFile('./release-notes.yml', (err, releaseNotes) => {
  if (err) {
    if (err.isValidationError) {
      return void console.error(
        'Could not load release notes. Validation failed: ',
        err.validationErrors
      );
    }

    return void console.error(
      'Could not load release-notes.yml',
      err
    );
  }

  console.info(
    `Successfully loaded release notes ${releaseNotes.title}`
  );
});
```

---

### LICENSE

The files in this archive are released under MIT license.
You can find a copy of this license in [LICENSE](LICENSE).
