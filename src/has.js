/*jshint node: true */
"use strict";

module.exports = {

    /**
     * Returns true if the history API is available.
     *
     * @returns {boolean}
     */
    history: function () {
        return !!(window.history && history.pushState);
    }
};
