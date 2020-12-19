export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // return { Authorization: "Bearer " + user.accessToken };

    // for node.js express backend
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
