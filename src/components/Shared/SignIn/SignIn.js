import React, { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { Link } from 'react-router-dom';

import './SignIn.scss';
import { connectOptions } from '../../../util/stacks';

const SignIn = props => {
  const msg = props.msg || '';
  const { doOpenAuth, userData } = useConnect();
  const [currentUserSession, setCurrentUserSession] = useState();
  const activate = async () => {
    try {
      doOpenAuth(
        true,
        connectOptions(({ userSession }) => {
          console.log('ok');
          setCurrentUserSession(userSession.loadUserData());
        }),
      );
    } catch (err) {
      console.log('error activating', err);
    }
  };
  console.log({ userData });
  console.log(currentUserSession);
  return (
    <>
      {currentUserSession &&
      (currentUserSession.profile || currentUserSession.profile.stxAddress) ? (
        <>
          <Link
            to={`/profile/${currentUserSession.profile.stxAddress}`}
            onClick={props.toggleNav}
          >
            Profile
          </Link>
        </>
      ) : (
        <button onClick={() => activate()} className={msg ? 'Big' : ''}>
          {msg ? <span>{msg}</span> : <>Get started</>}
        </button>
      )}
    </>
  );
};

export default SignIn;
