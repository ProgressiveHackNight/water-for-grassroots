import React, { useEffect } from 'react';

import SearchResults from './SearchResults';
import UserInfoForm from './UserInfoForm';

const Search = () => {
  const [results, setResults] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState({});

  useEffect(() => {
      // TODO: hit the real db to get the results
      const fakeResults = Object.keys(userInfo).length ? [
        {
          name: 'Org 1',
          description: 'This is a brief description of the organization and what we do',
          website: 'placeholder.com',
          needs: 'This is a list of skills or needs',
          connect: 'placeholder',
        },
        {
          name: 'org 2',
          description: 'placeholder',
          website: 'placeholder',
          needs: 'placeholder',
          connect: 'placeholder',
        },
      ] : [];
      setResults(fakeResults);
    }, [userInfo],
  );
  return (
    <>
      <UserInfoForm handleSubmit={setUserInfo} />
      {results.length ? <SearchResults results={results} /> : null}
    </>
  );
};

export default Search
