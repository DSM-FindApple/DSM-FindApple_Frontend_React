import { useEffect, useRef } from 'react';
import socketIO from 'socket.io-client';

const ENDPOINT= `http://3.35.131.241:8080?token=${localStorage.getItem('access-token')}`

export const useSocket = () => {
  const socket = useRef<any>();

  useEffect(() => {
    socket.current = socketIO.connect(ENDPOINT, {
      transports: ['websocket'],
    });
  }, []);

  return {socket} as const;
};