import type { ComponentType, JSX } from 'react';

declare module '*.mdx' {
  const Content: ComponentType<{ components?: JSX.IntrinsicElements }>;
  export default Content;
}
