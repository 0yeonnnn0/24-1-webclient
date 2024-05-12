import './Loading.css';
import Spinner from '../assets/spinner.gif'

function Loading() {
    return (
        <div className="loading-background absolute w-full h-full flex flex-col items-center justify-center z-50">
            <div className="loading-text">잠시만 기다려주세요...</div>
            <img src={Spinner} alt="로딩중" width="10%" />
        </div>
    )
}

export default Loading;