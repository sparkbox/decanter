/**
 * Custom Keyboard Events for the main nav.
 *
 * Event handling functions for the MainNav's first level SubNavItem.
 *
 * @return {Object} An object of callback functions.
 */
export const mainEvents = () => {
  return {
    NavItem: {
      2: {
        onKeydownArrowLeft: function (event, instance) {
          if (instance.options.toggle && !instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowLeft(event, instance.link);
            let node = instance.getElement('parentNavPrevItem');
            if (node) {
              node.focus();
            }
          }
          else {
            instance.onKeydownArrowLeft(event, instance);
          }
        }
      }
    },
    SubNavItem: {
      // Only change the behaviour when in desktop mode. If not in desktop
      // mode go with the default so we set it to depth of 1.
      1: {
        onKeydownArrowRight: function (event, instance) {
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowRight(event, instance.link);
          }
          else {
            instance.onKeydownArrowDown(event, instance.link);
          }
        },
        onKeydownArrowDown: function (event, instance) {
          if (!instance.options.toggle || instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowDown(event, instance.link);
          }
          else {
            instance.onKeydownArrowRight(event, instance.link);
          }
        }
      },
      2: {
        onKeydownArrowLeft: function (event, instance) {
          if (instance.options.toggle && !instance.options.toggle.isExpanded()) {
            instance.onKeydownArrowLeft(event, instance.link);
            let node = instance.getElement('parentNavPrevItem');
            if (node) {
              node.focus();
            }
          }
          else {
            instance.onKeydownArrowLeft(event, instance);
          }
        }
      }
    }
  };
};
