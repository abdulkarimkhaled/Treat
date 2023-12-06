import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

function ShareReceipt(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={calcWidth(25.313)}
      height={calcHeight(21.275)}
      viewBox="0 0 25.313 21.275"
      {...props}
    >
      <Path
        d="M5.46 30.193a.88.88 0 01-.286-.046.922.922 0 01-.636-.922c0-.138.949-13.522 14.37-14.573V9.841A.922.922 0 0120.49 9.2l9.1 9.291a.922.922 0 010 1.29l-9.1 9.291a.922.922 0 01-1.581-.645V23.7c-8.959.341-12.633 5.991-12.67 6.061a.922.922 0 01-.779.429zM20.752 12.1v3.415a.922.922 0 01-.889.922c-8.683.318-11.789 6.1-12.9 9.821a19.065 19.065 0 0112.817-4.424h.041a.922.922 0 01.922.922v3.414l6.913-7.033z"
        transform="translate(-4.538 -8.918)"
        fill="#4a5a51"
      />
    </Svg>
  )
}

export { ShareReceipt }
