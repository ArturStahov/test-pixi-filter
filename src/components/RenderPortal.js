import ReactDOM from 'react-dom';

export default function RenderPortal({ children, selectorDom }) {
  const elemRoot = document.querySelector(selectorDom);
  return ReactDOM.createPortal({ children }, elemRoot);
}
