// Fragments -> grouping of siblings without an extra dom node

import { Fragment } from "react";
import React from "react";

// function FragmentsVariant1() {
//   return (
//     <>
//       <div>Hi</div>
//       <div>Hello</div>
//     </>
//   );
// }

// function FragmentsVariant2() {
//   return (
//     <Fragment>
//       <div>Apple</div>
//       <div>Mango</div>
//     </Fragment>
//   );
// }

function FragmentsVariant3() {
  return (
    <React.Fragment>
      <div>Apple</div>
      <div>Mango</div>
    </React.Fragment>
  );
}

function FragmentsComp() {
  const books = [
    { id: 1, book: "Harry potter", author: "JK.Rowling" },
    { id: 2, book: "Lord of Rings", author: "XYZ" },
  ];

  return (
    <>
      {/* <FragmentsVariant1 />
    //   <FragmentsVariant2 /> */}
      <FragmentsVariant3 />

      <dl>
        {books.map((item) => (
          <Fragment key={item.id}>
            <dt>Book : {item.book}</dt>
            <dt>Author : {item.author}</dt>
          </Fragment>
        ))}
      </dl>
    </>
  );
}
export default FragmentsComp;
