import React from "react";
import * as Components from "./Phase-1-Foundations/Module-03-Fundamentals/01-components";
import * as Jsx from "./Phase-1-Foundations/Module-03-Fundamentals/02-jsx-and-elements";
import * as Props from "./Phase-1-Foundations/Module-03-Fundamentals/03-props";
import * as Events from "./Phase-1-Foundations/Module-03-Fundamentals/04-events";
import * as States from "./Phase-1-Foundations/Module-03-Fundamentals/05-state";
import * as StateHooks from "./hooks/01-useState";
import * as Conditional from "./Phase-1-Foundations/Module-03-Fundamentals/06-conditional-rendering";
import * as Lists from "./Phase-1-Foundations/Module-03-Fundamentals/07-rendering-lists";
import * as UseEffect from "./Phase-1-Foundations/Module-04-Intermediate/01-use-effect";
import * as UseEffectHooks from "./hooks/02-useEffect";

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

      {/* <StateHooks.StateString /> */}
      {/* <StateHooks.StateNumber /> */}
      {/* <StateHooks.StateBoolean /> */}
      {/* <StateHooks.StateArray /> */}
      {/* <StateHooks.StateObject /> */}

      {/* <Conditional.Ternary /> */}
      {/* <Conditional.LogicalAnd /> */}
      {/* <Conditional.EarlyReturn /> */}
      {/* <Conditional.MultipleConditions /> */}

      {/* <Lists.Keys /> */}

      {/* <UseEffect.UseEffectBasics /> */}
      <UseEffectHooks.DataFetch />
    </>
  );
};

export default App;
