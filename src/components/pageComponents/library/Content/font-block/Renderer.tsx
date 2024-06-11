import { createRoot } from 'react-dom/client';
import { WrappedAdmiralT, type Props as Options } from './WrappedAdmiralT';

export const renderer = (container: HTMLDivElement, { theme, textType, text }: Options) => {
  const root = createRoot(container);
  root.render(<WrappedAdmiralT theme={theme} textType={textType} text={text} />);

  return root;
};
