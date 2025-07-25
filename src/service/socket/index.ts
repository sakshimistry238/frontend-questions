import { authStore } from "../store/auth";
import { io } from "socket.io-client";

export const SOCKET_PATH = import.meta.env.VITE_REACT_APP_SOCKET_SERVER;
console.log("SOCKET_PATH: ", SOCKET_PATH);

// export const socketInstance = () => {
//   const { userData } = authStore.getState();

//   return io({
//     extraHeaders: {
//       authorization: `Bearer ${userData.access_token}`,
//     },
//   });
// };

export const socketInstance = () => {
  const { userData } = authStore.getState();
  console.log(userData.access_token, "access_token");

  return io(import.meta.env.VITE_REACT_APP_SOCKET_SERVER, {
    transports: ['websocket'],
    query: {
      token: userData.access_token,
    },
  });
};