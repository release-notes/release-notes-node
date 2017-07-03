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
}
