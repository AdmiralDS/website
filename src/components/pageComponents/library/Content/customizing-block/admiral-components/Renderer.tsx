import { createRoot } from 'react-dom/client';
import { WrappedReactComponent, type Props as Options } from './WrappedReactComponent';

export const renderer = (container: HTMLDivElement, options: Options) => {
  const root = createRoot(container);
  root.render(<WrappedReactComponent {...options} />);

  return root;
};
