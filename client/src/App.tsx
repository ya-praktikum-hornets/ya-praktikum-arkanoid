import React from 'react';
import { useGetUserQuery, useSignInUserMutation } from './services/AuthApi';
import { ISignInUser } from './services/AuthApi';
function App() {
  const divStyle = {
    display: 'flex',
    width: '300px',
    flexFlow: 'column',
  };
  const test: ISignInUser = {
    login: 'Barnicle',
    password: 'Barnicle199528',
  };
  const [signInUser, {}] = useSignInUserMutation();
  const { data, refetch } = useGetUserQuery();
  // const [user, setUser] = React.useState({});
  // console.log(data);
  return (
    <div style={divStyle}>
      <input name="user" placeholder="name" />
      <input name="password" placeholder="password" />
      <button
        onClick={() => {
          signInUser(test);
          console.log(data);
          refetch();
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default App;
