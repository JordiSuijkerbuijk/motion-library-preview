export default function calculateScrollProgress(element, speed = 1) {
  const percentage = (window.scrollY / (element.offsetHeight + element.offsetTop)) * (100 * speed);

  return percentage;
}
