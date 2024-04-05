import "./TitleComponent.css";

function TitleComponent() {
    return (
        <div className="page-title">
            <div className="page-title-title">
                <p>알약 검색</p>
            </div>

            <div className="page-title-detail">
                <p>알약 사진을 찍고 물어보세요</p>
            </div>
        </div>
    );
}

export default TitleComponent;