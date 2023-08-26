import s from './Post.module.css';

function Post(props) {
    return (
       <div className={s.post}>
           <div className={s.post__avatar}>
               <img src="https://ferrero.co.ke/wp-content/uploads/2014/06/img.png" alt='ava' />
           </div>
           <div className={s.post__txt}>
               {props.message}
           </div>
       </div>
    );
}

export default Post;
