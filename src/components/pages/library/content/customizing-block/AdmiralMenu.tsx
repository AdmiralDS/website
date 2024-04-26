import * as React from 'react';

import {
  getHighlightedFilteredOptions,
  keyboardKey,
  Menu,
  MenuActionsPanel,
  type MenuProps,
  TextButton,
  TextInput,
} from '@admiral-ds/react-ui';
import PlusOutline from '@admiral-ds/icons/build/service/PlusOutline.svg?component';
import type { ChangeEvent } from 'react';

function uid(): string {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
}

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Привет, товарищ Адмирал!',
    value: 1,
  },
  {
    id: '2',
    label: 'Привет, товарищ Капитан!',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, товарищ Мичман!',
    value: 3,
  },
  {
    id: '4',
    label: 'Привет, товарищ Старшина!',
    value: 4,
  },
  {
    id: '5',
    label: 'Привет, товарищ Матрос!',
    value: 5,
  },
];

export interface AdmiralMenuProps {
  borderRadius: 0 | 2 | 4 | 6 | 8 | 10;
}

export const AdmiralMenu = ({ borderRadius }: AdmiralMenuProps) => {
  const initialButtonText = 'Добавить';

  const [options, setOptions] = React.useState([...STORY_ITEMS]);
  const [inputValue, setInputValue] = React.useState<string>('Привет');
  const [buttonText, setButtonText] = React.useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
  const [active, setActive] = React.useState<string | undefined>(options[0].id);

  const model = React.useMemo(() => {
    return getHighlightedFilteredOptions(options, inputValue, 'Нет совпадений');
  }, [options, inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    // prevent selecting option on Space press
    if (code === keyboardKey[' ']) {
      e.stopPropagation();
    }
  };

  const handleTextButtonClick = () => {
    const newId = uid();
    const newValue = Math.floor(Math.random());
    const newOption = { id: newId, label: inputValue, value: newValue };
    const newOptions = [newOption, ...options];
    setOptions(newOptions);
    setActive(newId);
  };

  React.useEffect(() => {
    if (inputValue === '') {
      setButtonText(initialButtonText);
      setButtonDisabled(true);
    } else {
      setButtonText(`${initialButtonText} «${inputValue}»`);
      setButtonDisabled(false);
    }
  }, [inputValue]);

  const menuPanelContentDimension = 'm';

  return (
    <div
      style={{
        width: 'fit-content',
        overflow: 'hidden',
        borderColor: 'transparent',
        boxShadow:
          '0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);',
        borderRadius: `${borderRadius}px`,
      }}
    >
      <Menu
        defaultIsActive={false}
        model={model}
        active={active}
        onActivateItem={setActive}
        onSelectItem={(id) => console.log(`Selected id: ${id}`)}
        renderTopPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextInput
                dimension={menuPanelContentDimension}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={(...p) => {
                  handleKeyDown(...p);
                }}
              />
            </MenuActionsPanel>
          );
        }}
        renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton
                text={buttonText}
                disabled={buttonDisabled}
                //iconStart={<PlusOutline />}
                dimension={menuPanelContentDimension}
                onClick={handleTextButtonClick}
              />
            </MenuActionsPanel>
          );
        }}
      />
    </div>
  );
};
