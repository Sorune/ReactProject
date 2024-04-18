import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const AddrWithDaum = (props) => {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
    
        console.log("Full Address:", fullAddress); // Check the full address
        console.log("Zone Code:", data.zonecode); // Check the postal code
    
        // Call onUpdateAddress with the new address data
        props.onUpdateAddress(fullAddress, data.zonecode);
        props.onClose();
    }
    const postCodeStyle = {
        display: "block",
        width: "600px",
        height: "500px",
        padding: "7px",
    };
    
    const popupLayout = {
        width: "650px",
        height: "550px",
        // border: "1px solid red",
        position: "absolute",
        top: "25%",
        left: "25%",
        backgroundColor: "#ddd",
        fontSize: "20px",
        color: "red"
    }

    return(
        <div className="thisPostDiv" style={popupLayout}>
            {/* 닫기 버튼 생성 */}
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
            <DaumPostcodeEmbed style={postCodeStyle} onComplete={handlePostCode}/>
        </div>
    );
}

export default AddrWithDaum;