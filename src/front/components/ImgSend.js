import { useState } from "react";
import "./ImgSend.css";

function ImgSend({ getData }) {

    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };


    return (
        <div className="img-send-body">
            <div className="img-send">
                <div className="preview">
                    {imageSrc && <img className="preview-img" src={imageSrc} alt="preview-img" />}
                </div>
            </div>
            <div className="img-btns">
                <label className="medicine-img-label" htmlFor="medicineImg">사 진 추 가</label>
                <input id="medicineImg" type="file" onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }} />
                <button className="submit-btn" onClick={() => getData()}>제 출</button>
            </div>
        </div>
    );
}
export default ImgSend;