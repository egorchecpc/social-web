import s from './Chats.module.css';
import Chat from './Chat/Chat'

function Chats(props) {

    let chats=props.chatData.map((chat)=><Chat name={chat.name} key={chat.id} id={chat.id} />);

    return (
        <div className={s.chats}>
            {chats}
        </div>
    );
}

export default Chats;
