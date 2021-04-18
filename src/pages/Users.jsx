import React, { useEffect } from "react";
import User from "./../components/User";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./../_actions";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.active.length === 0) {
      dispatch(fetchUsers(321)); // <-- (321) example that you can send your data to actions
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  Basic about useEffect:

  // useEffect, always runs when a component gets mounted
  useEffect(() => {
    // Code to be executed
    return () => {
    // Code that will execute when the component gets unmounted
    };
  }, [input]); // When the variable is changed, the useEffect will also be executed.
*/

  return (
    <div>
      {users.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {
            // eslint-disable-next-line array-callback-return
            users.active.map((e, key) => (
              <User
                key={key}
                name={e.name}
                email={e.email}
                company={e.company}
                username={e.username}
              />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Users;
