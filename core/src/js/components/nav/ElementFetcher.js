/**
 * ActivePath Class
 *
 * NEEDS DESCRIPTION.
 */
export default class ElementFetcher {

  /**
   * [constructor description]
   * @param {[type]} element [description]
   * @param {[type]} what    [description]
   */
  constructor(element, what) {
    this.item = element;
    this.what = what;
  }

  /**
   * [fetch description]
   * @return {[type]} [description]
   */
  fetch() {
    try {
      switch (this.what) {
        case 'first':
          return this.item.parentNode.firstElementChild.firstChild;
        case 'last':
          return this.item.parentNode.lastElementChild.firstChild;
        case 'firstElement':
          return this.item.parentNode.firstElementChild;
        case 'lastElement':
          return this.item.parentNode.lastElementChild;
        case 'next':
          return this.item.nextElementSibling.querySelector('a');
        case 'prev':
          return this.item.previousElementSibling.querySelector('a');
        case 'nextElement':
          return this.item.nextElementSibling;
        case 'prevElement':
          return this.item.previousElementSibling;
        case 'parentItem':
          var node = this.item.parentNode.parentNode;
          if (node.tagName === 'NAV') { return false; }
          return node.querySelector('a');
        case 'parentButton':
          return this.item.parentNode.parentNode.querySelector('button');
        case 'parentNav':
          return this.item.parentNode.parentNode;
        case 'parentNavLast':
          return this.item.parentNode.parentNode.parentNode.lastElementChild.querySelector('a');
        case 'parentNavFirst':
          return this.item.parentNode.parentNode.parentNode.firstElementChild.querySelector('a');
        case 'parentNavNext':
          return this.item.parentNode.parentNode.nextElementSibling;
        case 'parentNavPrev':
          return this.item.parentNode.parentNode.previousElementSibling;
        case 'parentNavPrevItem':
          return this.item.parentNode.parentNode.previousElementSibling.querySelector('a');
        case 'firstSubnavLink':
          return this.item.querySelector(':scope > ul li a');
        case 'firstSubnavItem':
          return this.item.querySelector(':scope > ul li');
        case 'subnav':
          return this.item.querySelector(':scope > ul');
        default:
          return false;
      }
    }
    catch (err) {
      return false;
    }
  }
}
