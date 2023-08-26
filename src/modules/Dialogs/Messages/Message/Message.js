import s from './Messages.module.css';

function Messages() {
    return (
        <div className={s.messages}>
            <div className={s.message}>hi</div>
            <div className={s.message}>hey</div>
            <div className={s.message}>qq</div>
        </div>
    );
}

export default Messages;
