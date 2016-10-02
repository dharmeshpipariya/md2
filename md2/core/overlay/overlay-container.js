(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */
    var OverlayContainer = (function () {
        function OverlayContainer() {
        }
        /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns {HTMLElement} the container element
         */
        OverlayContainer.prototype.getContainerElement = function () {
            if (!this._containerElement) {
                this._createContainer();
            }
            return this._containerElement;
        };
        /**
         * Create the overlay container element, which is simply a div
         * with the 'md-overlay-container' class on the document body.
         */
        OverlayContainer.prototype._createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('md-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        };
        return OverlayContainer;
    }());
    exports.OverlayContainer = OverlayContainer;
});

//# sourceMappingURL=overlay-container.js.map
