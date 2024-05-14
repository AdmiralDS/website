import { useState } from 'react';

import { Tree, TreeNode } from '@admiral-ds/react-ui';
import type { TreeItemProps, TreeNodeRenderOptionProps } from '@admiral-ds/react-ui';
//import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'1'} /*icon={FolderSolid}*/ label={'Заголовок, первый уровень'} {...options} />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-3'} /*icon={FolderSolid}*/ label={'Строка, второй уровень'} {...options} />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-2'} /*icon={FolderSolid}*/ label={'Строка, третий уровень'} {...options} />
            ),
            id: '2-2',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-3'} /*icon={FolderSolid}*/ label={'Строка, третий уровень'} {...options} />
            ),
            id: '2-3',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-4'} /*icon={FolderSolid}*/ label={'Строка, третий уровень'} {...options} />
            ),
            id: '2-4',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-5'} /*icon={FolderSolid}*/ label={'Строка с чекбоксом, третий уровень'} {...options} />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode key={'3-1'} label={'Строка с чекбоксом, четвертый уровень'} {...options} />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode {...options} label={'Строка с чекбоксом, четвертый уровень'} key={'3-2'} />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Строка с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode {...options} label={'Строка с чекбоксом, четвертый уровень'} key={'3-4'} />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode {...options} label={'Строка с чекбоксом, пятый уровень'} key={'4-1'} />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode {...options} label={'Строка с чекбоксом, пятый уровень'} key={'4-2'} />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} /*icon={FolderSolid}*/ label={'Раскрывающеаяся строка, второй уровень'} key={'1-1'} />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} /*icon={FolderSolid}*/ label={'Раскрывающеаяся строка, второй уровень'} key={'1-2'} />
        ),
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode {...options} /*icon={FolderSolid}*/ label={'Заголовок, первый уровень'} key={'2'} />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode {...options} /*icon={FolderSolid}*/ label={'Заголовок, первый уровень'} key={'3'} />
    ),
    id: '3',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode {...options} /*icon={FolderSolid}*/ label={'Заголовок, первый уровень'} key={'4'} />
    ),
    id: '4',
    disabled: true,
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode {...options} /*icon={FolderSolid}*/ label={'Заголовок, первый уровень'} key={'5'} />
    ),
    id: '5',
    children: [],
  },
];

export const AdmiralTree = () => {
  const [dataList, setDataList] = useState<TreeItemProps[]>(demo1_TreeModel);

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Tree style={{ width: '440px' }} model={dataList} onChange={(dataList) => setDataList(dataList)} />
    </div>
  );
};
