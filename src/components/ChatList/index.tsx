import ChatListContainer from './Container/ChatListContainer';
import * as S from './styles'

const data = [
  {
    id: '1',
    name: "한준호",
    title: 'ㅁㄴㅇ',
    read: false,
  },
  {
    id: '2',
    name: "김재원",
    title: '123123ㅂㄴㅇㅈㅁㄷㅁㅇㄴㅇㅁㅈ',
    read: true,
  },
]

const ChatList = () => {
  // const [ data, setData ] = useState(dataD);

  return (
    <>
        <S.Wrapper>
            {
              data.map((i, index) => {
                return (
                  <ChatListContainer {...i} key={index}/>
                )
              })
            }
        </S.Wrapper>
    </>
  );
}

export default ChatList;