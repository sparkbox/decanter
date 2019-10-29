/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class ActivePath {

  /**
   * [constructor description]
   * @param {[type]} element [description]
   */
  constructor(element, options = {}) {
    this.elem = element;
    // Class properties.
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.itemActiveTrailClass = options.itemActiveTrailClass || 'active-trail';
    this.itemExpandedClass = options.itemExpandedClass || 'expanded';
  }

  /**
   * Dynamically add an active path to the menu tree.
   *
   * Find all links with the current window's url and add the
   * options.itemActiveClass class to the LI element container all the way up
   * the menu tree back to the root.
   */
  setActivePath() {
    let path = window.location.pathname;
    let anchor = window.location.hash || '';
    let query = window.location.search || '';
    let currentItem = false;

    // Queries to run to find matching active paths in order of unqiueness.
    let finders = [
      this.elem.querySelector("a[href*='" + anchor + "']"),
      this.elem.querySelector("a[href*='" + query + "']"),
      this.elem.querySelector("a[href='" + path + query + anchor + "']"),
      this.elem.querySelector("a[href*='" + path + query + "']")
    ];

    // Go through the queries and see if we have any results.
    finders.forEach(function (val) {
      if (!currentItem && val) {
        currentItem = val;
      }
    });

    // Can't find anything. End.
    if (!currentItem) {
      return;
    }

    // While we have parents go up and add the active class.
    while (currentItem) {

      // If we are on a LI element we need to add the active class.
      if (currentItem.tagName === 'LI') {
        currentItem.classList.add(this.itemActiveClass);
        break;
      }

      // Always increment.
      currentItem = currentItem.parentNode;
    }
  }

  /**
   * Expand all menus in the active path.
   *
   * After this.setActivePath() has been run or the itemActiveClass has been set
   * on all the appropriate menu items go through the nav and expand the
   * subNavItems that contain activeClass items.
   */
  expandActivePath() {
    let actives = this.elem.querySelectorAll('.' + this.itemActiveClass);
    if (actives.length) {
      actives.forEach(
        item => {

          // While we have parents go up and add the active class.
          while (item) {
            // End when we get to the parent nav item stop.
            if (item === this.elem) {
              // Stop at the top most level.
              break;
            }

            // If we are on a LI element we need to add the active class.
            if (item.tagName === 'LI') {
              item.classList.add(this.itemExpandedClass);
              item.classList.add(this.itemActiveTrailClass);
              item.firstElementChild.setAttribute('aria-expanded', true);
            }

            // Always increment.
            item = item.parentNode;
          }
        }
      );
    }
  }
}
