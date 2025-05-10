import { useState } from "react";
const initialValues = { username: "", password: "" };
const LoginForm = () => {
  const [formValues, updateFormValues] = useState(initialValues);
  const { username, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={username}
          onChange={handleChange}
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
      </div>
      {username && password && <button type="submit">Login</button>}
    </form>
  );
};

function App() {
  return <LoginForm />;
}

export default App; // import { useState } from "react";

// const initialValues = {
//   username: "",
//   password: ""
// };

// const LoginForm = () => {
//   const [formValues, updateFormValues] = useState(initialValues);
//   const { username, password } = formValues;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//   };

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     updateFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           value={username}
//           onChange={handleChange}
//           name="username"
//           placeholder="Enter your username"
//         />
//       </div>
//       <div>
//         <input
//           value={password}
//           onChange={handleChange}
//           name="password"
//           placeholder="Enter your password"
//         />
//       </div>
//       {username && password && <button type="submit">Login</button>}
//     </form>
//   );
// };
// /* Note this is just a quick example.
//    Normally you would want to export the LoginForm component
//    from its own file then import it here. */

// function App() {
//   return <LoginForm />;
// }

// export default App;
