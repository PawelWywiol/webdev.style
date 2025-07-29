import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { BlockContent, Root } from 'mdast';

const remarkTableWrapper: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'table', (node, index, parent) => {
    if (parent && typeof index === 'number') {
      const wrapper = {
        type: 'div',
        data: {
          hName: 'div',
          hProperties: {
            className: ['table-wrapper'],
          },
        },
        children: [node],
      };

      parent.children.splice(index, 1, wrapper as unknown as any);
    }
  });

  return tree;
};

export default remarkTableWrapper;
