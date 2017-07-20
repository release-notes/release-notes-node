'use strict';

const MODIFICATION_TYPES = [
  'added',
  'removed',
  'changed',
  'improved',
  'deprecated',
  'fixed',
  'secured',
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

  /**
   * Create new release instance.
   *
   * @param {Object} properties
   */
  constructor(properties = {}) {
    this.date = properties.date || '';
    this.description = properties.description || '';
    this.title = properties.title || '';
    this.version = properties.version || '';

    // modifications
    this.added = properties.added || [];
    this.removed = properties.removed || [];
    this.changed = properties.changed || [];
    this.improved = properties.improved || [];
    this.deprecated = properties.deprecated || [];
    this.fixed = properties.fixed || [];
    this.secured = properties.secured || [];
  }

  /**
   * Append a new modification entry to the list.
   *
   * @param {string} type
   * @param {string|object} modification
   * @return {Release}
   */
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

    Release.MODIFICATION_TYPES.forEach((type) => {
      if (this[type] && this[type].length) {
        modifications[type] = this[type];
      }
    });

    return modifications;
  }

  /**
   * Map the release instance to a plain object.
   *
   * @return {Object}
   */
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
      secured: this.secured,
    };
  }

  /**
   * Create a new Release instance from plain object.
   *
   * @param {Object} document
   * @return {Release}
   */
  static fromJSON(document) {
    return new Release({
      date: document.date,
      description: document.description,
      title: document.title,
      version: document.version,
      added: document.added,
      removed: document.removed,
      changed: document.changed,
      improved: document.improved,
      deprecated: document.deprecated,
      fixed: document.fixed,
      secured: document.secured,
    });
  }
}

module.exports = Release;
