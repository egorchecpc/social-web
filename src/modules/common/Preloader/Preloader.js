import s from './Preloader.module.css'
import preloader from './../../../img/loading_img.svg'

function Preloader() {
    return (
        <div className={s.preloader}>
                <img src={preloader} alt='preloader' className={s.preloader__img}/>
        </div>

    )
}
export default Preloader