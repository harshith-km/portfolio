declare module '@heroicons/react/24/outline' {
  import { ComponentType, SVGProps } from 'react';
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;

  export const Bars3Icon: IconType;
  export const XMarkIcon: IconType;
} 