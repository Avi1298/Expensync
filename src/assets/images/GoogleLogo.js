import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const GoogleLogo = () => (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)">
      <Path
        d="m3.546 9.669-.557 2.079-2.036.043A7.964 7.964 0 0 1 0 8a7.96 7.96 0 0 1 .895-3.68l1.812.333.794 1.801a4.756 4.756 0 0 0 .045 3.215Z"
        fill="#FBBB00"
      />
      <Path
        d="M15.86 6.506a8.015 8.015 0 0 1-2.852 7.733l-2.283-.117-.323-2.017a4.768 4.768 0 0 0 2.052-2.435H8.176V6.506H15.86Z"
        fill="#518EF8"
      />
      <Path
        d="M13.008 14.238A7.966 7.966 0 0 1 8 16 7.999 7.999 0 0 1 .953 11.79L3.546 9.67a4.757 4.757 0 0 0 6.856 2.436l2.606 2.133Z"
        fill="#28B446"
      />
      <Path
        d="m13.106 1.842-2.591 2.121A4.758 4.758 0 0 0 3.5 6.454L.895 4.321A7.998 7.998 0 0 1 8 0c1.941 0 3.72.691 5.106 1.842Z"
        fill="#F14336"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GoogleLogo;
