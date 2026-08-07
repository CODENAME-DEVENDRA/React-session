//Component -> one default export
//creteElement

//NAMED EXPORT #1
export function ButtonComp() {
  return <button>Click</button>;
}

//NAMED EXPORT #2
export function InputComp() {
  return <input type="text" />;
}

//DEFAULT EXPORT
function CardComp() {
  return (
    <div>
      <p>Card Component</p>
      <InputComp />
      <ButtonComp />
    </div>
  );
}
export default CardComp;
