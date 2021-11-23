import { useEffect, useRef } from 'react';
import socketIO from 'socket.io-client';

const ENDPOINT= `${process.env.REACT_APP_SOCKET_URL}?token=${localStorage.getItem('access-token')}`

export const useSocket = () => {
  const socket = useRef<any>();

  useEffect(() => {
    socket.current = socketIO.connect(ENDPOINT, {
      transports: ['websocket'],
    });
  }, []);

  return {socket} as const;
};