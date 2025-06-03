import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Image, Root } from 'mdast';

const remarkLazyLoading: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'image', (node: Image & { data?: any }) => {
    if (!node.data) {
      node.data = {};
    }
    if (!node.data.hProperties) {
      node.data.hProperties = {};
    }
    node.data.hProperties.loading = 'lazy';
    const videoUrl = (node.url ?? '').replace(
      /\.(jpg|jpeg|png|gif|webp)$/,
      '.mp4',
    );
    node.data.hProperties['data-video'] = videoUrl;
    node.data.hProperties.class = 'lazy';
  });
};

export default remarkLazyLoading;
