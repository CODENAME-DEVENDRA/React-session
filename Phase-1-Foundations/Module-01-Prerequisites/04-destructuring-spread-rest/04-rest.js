//objects
const props = {
  variant: "primary",
  size: "lg",
  disabled: false,
  onClick: () => console.log("Button clicked"),
};
const { variant, size, ...restProps } = props;

console.log("variant", variant); // Output: primary
console.log("size", size); // Output: lg
console.log("restProps", restProps); // Output: { disabled: false, onClick: [Function: onClick] }

//React use case example
// function ButtonComponent({variant, size, ...restProps}) {
// return <Button variant={variant} size={size} {...restProps} />
// }

//functions
function greet(greeting, name, ...names) {
  console.log("greeting", greeting);
  console.log("name", name);
  console.log("names", names);
  return `${greeting} ${name}, ${names.join(", ")}`;
}
console.log(greet("Hello", "Good morning", "Bob", "Charlie")); //Hello Good morning, Bob, Charlie

//arrays
const [red, ...otherColors] = rgb;
console.log("red", red); // Output: 255
console.log("otherColors", otherColors); // Output: [200, 0]
