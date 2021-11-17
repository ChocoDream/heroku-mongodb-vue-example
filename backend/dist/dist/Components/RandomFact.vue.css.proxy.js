// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.fact-wrapper[data-v-12252dc4] {\r\n  margin-top: 3vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\n}\n.fact-button[data-v-12252dc4] {\r\n  width: 100%;\r\n  font-size: 1.1rem;\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}