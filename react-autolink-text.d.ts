/// <reference path="typings/main.d.ts" />

declare module "react-autolink-text" {
  import * as React from 'react';

  interface IReactAutolinkTextProps extends React.Props<ReactAutolinkText> {
    text: string;
    maxLength?: string | number;
  }

  interface ReactAutolinkText extends React.ComponentClass<IReactAutolinkTextProps> {
  }
  const ReactAutolinkText:ReactAutolinkText;

  export = ReactAutolinkText;
}
