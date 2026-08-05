function getUser(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id, name: "John Doe" }), 500),
  );
}

//normal function
// async function loadUser(id) {
//   try {
//     loading = true;
//     const user = await getUser(id);
//     console.log("user", user);
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     loading = false;
//   }
// }
// loadUser(1);

//arrow function
const loadUser = async (id) => {
  try {
    loading = true;
    const user = await getUser(id);
    console.log("user", user);
  } catch (err) {
    console.log(err.message);
  } finally {
    loading = false;
  }
};
loadUser(1);
