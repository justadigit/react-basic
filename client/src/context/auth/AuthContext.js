import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RefresherContext from '../../context/refresher/RefresherContext';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //state
  const initialUserState = { id: '', name: '', email: '' };
  const [userInfo, setUserInfo] = useState(initialUserState);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  //consuming refresherContext
  const { refresh, setRefresh } = useContext(RefresherContext);

  useEffect(() => {
    console.log('I am Auth context');
    if (
      sessionStorage.email &&
      sessionStorage.authorId &&
      sessionStorage.name
    ) {
      setUserInfo({
        id: sessionStorage.authorId,
        email: sessionStorage.email,
        name: sessionStorage.name,
      });
      console.log(userInfo);
    }
  }, [sessionStorage]);

  //navigate
  const navigate = useNavigate();

  //for signup
  const signup = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    const newAuthor = {
      name: user.name,
      email: user.email,
    };
    axios
      .post(`http://localhost:4000/api/v1/users`, newUser)
      .then(() => {
        return axios.post(`http://localhost:4000/api/v1/authors`, newAuthor);
      })
      .then((response) => {
        setSuccessMsg('Success!Please Login');
        navigate('/login');
      })
      .catch((err) => {
        setErrorMsg('Something Wrong! Error');
      });
  };

  //login
  const login = (user) => {
    axios
      .get(
        `http://localhost:4000/api/v1/users?email=${user.email}&password=${user.password}`
      )
      .then((response) => {
        const { name, email, id } = response.data[0];
        setUserInfo({ id: id, name: name, email: email });
        sessionStorage.setItem('authorId', id);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        navigate('/');
      })
      .catch((err) => setErrorMsg('Something Wrong! Error'));
  };

  //logout
  const logout = () => {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authorId');
    setUserInfo(initialUserState);
    navigate('/');
  };

  //createPost
  const createPost = (post) => {
    axios
      .post(`http://localhost:4000/api/v1/posts`, post)
      .then((response) => navigate(`/authors/${response.data.authorId}`))
      .catch((err) => setErrorMsg('Something Wrong!'));
  };

  //createComment
  const createComment = (comment) => {
    axios
      .post(`http://localhost:4000/api/v1/comments`, comment)
      .then((response) => {
        return true;
      })
      .catch((err) => {
        setErrorMsg('Something Wrongs!');
      });
  };
  //deleteComment
  const deleteComment = (comment) => {
    axios
      .delete(`http://localhost:4000/api/v1/comments/${comment.id}`)
      .then((result) => {
        return true;
      })
      .catch((err) => {
        setErrorMsg('Something Wrongs!');
      });
  };

  //deletePost
  const deletePost = (post) => {
    const authorId = post.author.id;
    axios
      .delete(`http://localhost:4000/api/v1/posts/${post.id}`)
      .then(() => {
        setRefresh(refresh + 1);
        navigate(`/authors/${authorId}`);
      })
      .catch((err) => {
        setErrorMsg('Something Wrongs!');
      });
  };
  //updatePost
  const updatePost = (post) => {
    axios
      .patch(`http://localhost:4000/api/v1/posts/${post.id}`, post)
      .then(() => {
        setRefresh(refresh + 1);
      })
      .catch((err) => {
        setErrorMsg('Something Wrongs!');
      });
  };

  //rendering
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg,
        signup,
        login,
        logout,
        createPost,
        createComment,
        deleteComment,
        deletePost,
        updatePost,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
