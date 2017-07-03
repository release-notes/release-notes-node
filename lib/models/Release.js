'use strict';

class Release {
  constructor() {
    this.date = '';
    this.description = '';
    this.title = '';
    this.version = '';

    // modifications
    this.added = [];
    this.removed = [];
    this.changed = [];
    this.improved = [];
    this.fixed = [];
    this.secured = [];
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
      fixed: this.fixed,
      secured: this.secured
    };
  }
}
