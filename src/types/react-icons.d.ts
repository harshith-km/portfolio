import { IconType } from 'react-icons';

declare module 'react-icons/fa' {
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
  export const HiOutlineMail: IconType;
}

declare module 'react-icons' {
  export interface IconType {
    (props: React.SVGProps<SVGSVGElement>): JSX.Element;
  }
} 