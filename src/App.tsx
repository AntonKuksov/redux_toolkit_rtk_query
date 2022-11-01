import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://api.watchmode.com/v1/list-titles",
    params: {
      apiKey: "u98XlZ86EmcMavXDkLBxJ6bwTPQvWtgQ7wpGiISc",
      source_ids: "203,57",
      // limit: 10,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*{JSON.stringify(users, null, 2)}*/}
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
