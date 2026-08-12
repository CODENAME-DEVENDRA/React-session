import React from "react";
import * as Components from "./Phase-1-Foundations/Module-03-Fundamentals/01-components";
import * as Jsx from "./Phase-1-Foundations/Module-03-Fundamentals/02-jsx-and-elements";
import * as Props from "./Phase-1-Foundations/Module-03-Fundamentals/03-props";
import * as Events from "./Phase-1-Foundations/Module-03-Fundamentals/04-events";
import * as States from "./Phase-1-Foundations/Module-03-Fundamentals/05-state";
import * as Hooks from "./hooks/01-useState";

const App = () => {
  return (
    <>
      {/* <Components.ComponentsExamples /> */}
      {/* <Components.ExportsExamples /> */}
      {/* <Components.CompositionExamples /> */}

      {/* <Jsx.JsxBasics /> */}
      {/* <Jsx.Fragments /> */}
      {/* <Jsx.Styling /> */}

      {/* <Props.PropsBasics /> */}
      {/* <Props.ChildrenProp /> */}
      {/* <Props.PropDrilling /> */}

      {/* <Events.OnClickBasics /> */}
      {/* <Events.EventObject /> */}
      {/* <Events.onChangeInputs /> */}
      {/* <Events.PassingHandlers /> */}

      {/* <States.StateBasics /> */}

      {/* <Hooks.StateString /> */}
      {/* <Hooks.StateNumber /> */}
      {/* <Hooks.StateBoolean /> */}
      {/* <Hooks.StateArray /> */}
      <Hooks.StateObject />
    </>
  );
};

export default App;
