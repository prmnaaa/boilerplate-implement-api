export function generateElement({ tag, id, className, innerText, innerHTML }) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (innerText) element.innerText = innerText;
  if (innerHTML) element.innerHTML = innerHTML;

  return element;
}