// import CardComp from "./01-components"; //DEFAULT
// import { ButtonComp, InputComp } from "./01-components"; //NAMED

import CardComp, { ButtonComp, InputComp } from "./01-components"; //COMBINED

function ExportComp() {
  return (
    <div>
      <div>
        <p>Input Component</p>
        <InputComp />
      </div>

      <div>
        <p>Button Component</p>
        <ButtonComp />
      </div>

      <div>
        <p>Card Component</p>
        <CardComp />
      </div>
    </div>
  );
}
export default ExportComp;
