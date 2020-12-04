import React, { useContext, useEffect } from 'react';

import { ExploreContext } from '../../contexts/ExploreContext';
import { DAO1 } from '../../util/constants';

const ExploreFetch = () => {
  const { dispatch } = useContext(ExploreContext);

  useEffect(() => {
    dispatch({
      type: 'setAllDaos',
      payload: [DAO1],
    });
  }, [dispatch]);

  return <></>;
};

export default ExploreFetch;
