'use strict';

const Release = require('./Release');

class ReleaseNotes {
  constructor(properties = {}) {
    this.description = properties.description || '';
    this.title = properties.title || '';
    this.releases = properties.releases || [];
  }

  /**
   * Map the release notes instance into a plain object.
   *
   * @return {Object}
   */
  toJSON() {
    return {
      title: this.title,
      description: this.description,
      releases: this.releases.map(r => r.toJSON()),
    };
  }

  /**
   * Naive approach. Simply add the release as first item to the list of releases.
   *
   * @param release
   * @return {ReleaseNotes}
   */
  addRelease(release) {
    this.releases.unshift(release);

    return this;
  }

  /**
   * @param {string} version
   * @return {Release|undefined}
   */
  findReleaseByVersion(version) {
    return this.releases.find(release => release.version === version);
  }

  /**
   * Create a new release notes instance from plain object.
   *
   * @param {Object} document
   * @return {ReleaseNotes}
   */
  static fromJSON(document) {
    const releases = document.releases
      ? document.releases.map(r => Release.fromJSON(r))
      : [];

    return new ReleaseNotes({
      title: document.title,
      description: document.description,
      releases,
    });
  }
}

module.exports = ReleaseNotes;

