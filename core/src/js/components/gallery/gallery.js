import '../../core/core';
import ModalGallery from './ModalGallery';

/**
 *
 */
document.addEventListener('DOMContentLoaded', event => {

  // Trigger Class.
  const galleryClass = 'su-gallery';

  // Find em.
  const galleries = document.querySelectorAll('.' + galleryClass);

  // Initialize each gallery that was found.
  galleries.forEach((gallery, index) => {
    let options = {
      maxItems: 4
    };
    new ModalGallery(gallery, options);
  });

});
