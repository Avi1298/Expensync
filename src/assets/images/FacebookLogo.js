import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const FacebookLogo = () => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 8a8.002 8.002 0 0 1-6.75 7.903v-5.59h1.864L11.469 8H9.25V6.5c0-.633.31-1.25 1.304-1.25h1.008V3.281s-.915-.156-1.79-.156c-1.828 0-3.022 1.107-3.022 3.112V8H4.719v2.312H6.75v5.59A8.002 8.002 0 0 1 8 0a8 8 0 0 1 8 8Z"
      fill="#1877F2"
    />
    <Path
      d="M11.114 10.313 11.469 8H9.25V6.5c0-.633.31-1.25 1.304-1.25h1.008V3.281s-.915-.156-1.79-.156c-1.828 0-3.022 1.107-3.022 3.112V8H4.719v2.313H6.75v5.59a8.06 8.06 0 0 0 2.5 0v-5.59h1.864Z"
      fill="#fff"
    />
  </Svg>
);

export default FacebookLogo;
