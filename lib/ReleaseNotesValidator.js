'use strict';

const Ajv = require('ajv');
const releaseNotesSchema = require('@release-notes/schema/definitions/release-notes.json');
const releaseSchema = require('@release-notes/schema/definitions/release.json');
const modificationListSchema = require('@release-notes/schema/definitions/modification-list.json');
const modificationSchema = require('@release-notes/schema/definitions/modification.json');


const validator = new Ajv({
  schemaId: '$id',
  schemas: [
    releaseNotesSchema,
    releaseSchema,
    modificationListSchema,
    modificationSchema,
  ],
});

class ReleaseNotesValidator {
  static validateReleaseNotes(releaseNotesData) {
    const isValid = validator.validate('@release-notes/release-notes', releaseNotesData);

    return {
      errors: validator.errors,
      isValid,
    };
  }

  static validateRelease(releaseData) {
    const isValid = validator.validate('@release-notes/release', releaseData);

    return {
      errors: validator.errors,
      isValid,
    };
  }

  static validateModificationList(modificationListData) {
    const isValid = validator.validate('@release-notes/modification-list', modificationListData);

    return {
      errors: validator.errors,
      isValid,
    };
  }

  static validateModification(modificationData) {
    const isValid = validator.validate('@release-notes/modification', modificationData);

    return {
      errors: validator.errors,
      isValid,
    };
  }
}

module.exports = ReleaseNotesValidator;
