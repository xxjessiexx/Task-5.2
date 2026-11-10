import DOMPurify from 'dompurify';

// Review text allows simple formatting, but not executable HTML.
// ReviewList.jsx calls this before dangerouslySetInnerHTML.
export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', {
  ALLOWED_TAGS: ['b', 'strong', 'i', 'em', 'u', 'p', 'br', 'ul', 'ol', 'li', 'a'],
  ALLOWED_ATTR: ['href', 'title'],
  ALLOW_DATA_ATTR: false,
});
