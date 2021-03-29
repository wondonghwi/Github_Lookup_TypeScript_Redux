import React from 'react';
import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileThunk } from '../modules/github';

const GithubProfileLoader = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
  };
  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중...</p>}
      {error && <p style={{ textAlign: 'center' }}>에러발생!...</p>}
      {data && <GithubProfileInfo name={data.name} thumbnail={data.avatar_url} bio={data.bio} blog={data.blog} />}
    </>
  );
};

export default GithubProfileLoader;
