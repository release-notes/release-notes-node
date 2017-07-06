'use strict';

class ReleaseNotes {
  constructor(properties = {}) {
    this.description = properties.description || '';
    this.title = properties.title || '';
    this.releases = [];
  }

  toJSON() {
    return {
      description: this.description,
      title: this.title,
      releases: this.releases.map(r => r.toJSON())
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

  static fromJSON(document) {
    return new ReleaseNotes({
      title: document.title,
      description: document.description
    });
  }
}
