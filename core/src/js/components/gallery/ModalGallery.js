import PhotoSwipe from 'photoswipe/dist/photoswipe.js';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default.js';
import PhotoSwipeCss from 'photoswipe/dist/photoswipe.css';

/**
 *
 */
export default class ModalGallery {

  /**
   * [constructor description]
   * @param {[type]} elem    [description]
   * @param {[type]} options [description]
   */
  constructor(elem, options) {
    this.elem = elem;
    this.options = options;
    this.maxItems = options.maxItems || 4;
    this.modal = Object.assign({ selector: '.su-gallery__link' }, options.modal);
    // Remove the class from the wrapper.
    this.elem.classList.remove('no-js');
    // Give this instance a unique ID.
    let id = Math.random().toString(36).substr(2, 9);
    this.id = 'su-gallery-id--' + id;
    this.elem.id = this.id;
    // Store the links and images.
    this.links = this.elem.querySelectorAll('#' + this.id + ' > .su-gallery__link');
    this.images = this.elem.querySelectorAll('#' + this.id + ' > .su-gallery__image');

    // Only activate on more than max.
    if (this.links < this.maxItems) {
      return;
    }

    // Initialize setup.
    this.initialize();
  }

  /**
   * [initialize description]
   * @return {[type]} [description]
   */
  initialize() {
    this.modal.selector = '#' + this.id + " " + this.modal.selector;
    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI, items, options);
    gallery.init();
  }

  /**
   * Handler for all events attached to an instance of this class.
   *
   * This method must exist when events are bound to an instance of a class
   * (vs a function). This method is called for all events bound to an
   * instance. It inspects the instance (this) for an appropriate handler
   * based on the event type. If found, it dispatches the event to the
   * appropriate handler.
   *
   * @param {Event} event - The triggering event.
   */
  handleEvent(event) {
    event = event || window.event;

     // If this class has an onEvent method (onClick, onKeydown) invoke it.
    const handler = 'on'
      + event.type.charAt(0).toUpperCase()
      + event.type.slice(1);

     // What was clicked.
    const target = event.target || event.srcElement;

    if (typeof this[handler] === 'function') {
      this[handler](event, target);
    }
  }

}
