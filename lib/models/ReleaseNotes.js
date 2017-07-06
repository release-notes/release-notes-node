'use strict';

class ReleaseNotes {
  constructor() {
    this.description = '';
    this.title = '';
    this.releases = [];
  }

  toJSON() {
    return {
      description: this.description,
      title: this.title,
      releases: this.releases
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
}
