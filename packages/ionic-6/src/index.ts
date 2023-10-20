import { FormProps, ThemeProps, withTheme } from "@rjsf/core";

import Templates from "./templates";
// import Widgets from "./widgets";

export { __createIonic6FrameProvider } from "./Ionic6FrameProvider";

export { Templates };
// export { Templates, Widgets };

export const Theme: ThemeProps = {
  templates: Templates,
  // widgets: Widgets,
};

export const Form: React.ComponentType<FormProps> = withTheme(Theme);

export default Form;
