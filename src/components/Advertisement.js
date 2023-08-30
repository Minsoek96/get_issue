import React from "react";
import styled from "styled-components";

const AdvertisementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AdvertisementImage = styled.img`
  width: 110px;
  margin: 0 5px; // 이미지 사이의 간격을 위해 추가
`;

const Advertisement = () => {
  return (
    <AdvertisementWrapper>
      <a
        href="https://www.wanted.co.kr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AdvertisementImage
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="Wanted Ad"
        />
        <AdvertisementImage
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="Wanted Ad"
        />
        <AdvertisementImage
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="Wanted Ad"
        />
      </a>
    </AdvertisementWrapper>
  );
};

export default Advertisement;
