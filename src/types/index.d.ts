declare module 'react-icons/fa' {
  import { ComponentType, SVGProps } from 'react';
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;

  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaGraduationCap: IconType;
  export const FaCertificate: IconType;
  export const FaExternalLinkAlt: IconType;
}

declare module 'react-icons/hi' {
  import { ComponentType, SVGProps } from 'react';
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = ComponentType<IconBaseProps>;

  export const HiOutlineMail: IconType;
} 