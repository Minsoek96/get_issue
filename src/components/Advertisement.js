import React from "react";
import styled from "styled-components";
import { V } from "../styles/variables";

const AdvertisementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${V.lg_margin};
  cursor: pointer;
`;

const AdvertisementImage = styled.img`
  width: ${V.sm_width};
  margin: 0 5px;
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
