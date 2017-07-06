'use strict';

const MODIFICATION_TYPES = [
  'added',
  'removed',
  'changed',
  'improved',
  'deprecated',
  'fixed',
  'secured'
];

class Release {
  /**
   * The list of supported modification types.
   *
   * @static
   * @return {string[]}
   */
  static get MODIFICATION_TYPES() {
    return MODIFICATION_TYPES;
  }

  constructor(properties = {}) {
    this.date = '';
    this.description = '';
    this.title = '';
    this.version = '';

    // modifications
    this.added = [];
    this.removed = [];
    this.changed = [];
    this.improved = [];
    this.deprecated = [];
    this.fixed = [];
    this.secured = [];
  }

  addModification(type, modification) {
    const generalizedType = type.toLowerCase();

    if (Release.MODIFICATION_TYPES.indexOf(generalizedType) === -1) {
      throw new Error('Invalid modification type');
    }

    this[generalizedType].push(modification);

    return this;
  }

  /**
   * Returns a hash of all modifications indexed by modification type.
   *
   * @see Release.MODIFICATION_TYPES
   * @return {object}
   */
  getModifications() {
    const modifications = {};

    Release.MODIFICATION_TYPES.forEach(type => {
      if (this[type] && this[type].length) {
        modifications[type] = this[type];
      }
    });

    return modifications;
  }

  toJSON() {
    return {
      date: this.date,
      description: this.description,
      title: this.title,
      version: this.version,
      added: this.added,
      removed: this.removed,
      changed: this.changed,
      improved: this.improved,
      deprecated: this.deprecated,
      fixed: this.fixed,
      secured: this.secured
    };
  }
}

module.exports = Release;
