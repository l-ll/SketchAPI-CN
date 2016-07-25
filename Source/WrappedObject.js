// ********************************
// # WrappedObject.js
// # Sketch Javascript API.
//
// All code (C) 2016 Bohemian Coding.
// ********************************

/**
  Base class for all objects that
  wrap Sketch classes.

*/

export class WrappedObject {

    /**
      Return a new wrapped object for a given Sketch model object.

      @param {Object} object - The Sketch model object to wrap.
    */

    constructor(object) {
      /** @type {Object} The underlying Sketch model object that we are wrapping. */
      this._object = object
    }

    /**
      Returns the object ID of the wrapped Sketch model object.

      @return {string} The id.
    */

    get id() {
      return this._object._objectID();
    }
}