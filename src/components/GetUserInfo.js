const GetUserInfo = () => {
  const user = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(user);
  return { userInfo };
};

export default GetUserInfo;
