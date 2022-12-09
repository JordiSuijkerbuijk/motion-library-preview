export function removeInlineStyling() {
  const sections = Array.from(document.querySelectorAll('section'));

  sections.map((item) => {
    item.removeAttribute('style');
  });
}
