//Libs
import React from "react";
import { useSelector, useDispatch } from "react-redux";
//Store
import { setUserInfo } from "./Store/User/user.actions";
//Types
import { RootState } from "./Store/store";

const App: React.FC = () => {
  // Here's the cool type :D. A good reminder: this "state" is the state of all aplications's redux
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();

  function handleButtonClick() {
    const userData = {
      userId: "abcdef",
      userName: "Antonio",
      userLastName: "Gally"
    }
    //This setUserInfo is our action as a function, and we're passing the data that we want.
    dispatch(setUserInfo(userData))
  }

  return (
    <>
      <h1>Hi! my name is {userInfo?.userName || ""}</h1>
      <hr />
      <button onClick={handleButtonClick}>
        Click here to fill user information
      </button>
    </>
  )
}

export default App;