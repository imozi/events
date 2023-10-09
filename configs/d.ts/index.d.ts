declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { SVG };
  export default SVG;
}

declare const __IS_DEV__: boolean;

declare const __FRONTEND_PORT__: number;

declare const __BACKEND_PORT__: number;
