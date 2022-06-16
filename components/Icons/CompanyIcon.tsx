import React from 'react'

export const CompanyIcon: React.FC = (props) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h31v31H0z" />
    <mask
      id="c"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={31}
      height={31}
    >
      <path fill="url(#b)" d="M0 0h31v31H0z" />
    </mask>
    <g mask="url(#c)">
      <path fill="#000" fillOpacity={0.01} d="M0 0h31v31H0z" />
    </g>
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#d" transform="scale(.03226)" />
      </pattern>
      <pattern id="b" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#d" transform="scale(.03226)" />
      </pattern>
      <image
        id="d"
        width={31}
        height={31}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAABeWlDQ1BJQ0MgUHJvZmlsZQAAeJx1kT1Lw1AUht+2lopWOij4gUOGKg4tFAVx1Dp0KVJqBasuyW3SCkkablKkuAouDgUH0cWvwX+gq+CqIAiKICL4D/xapMRzm0KLtCfcnIf3nvdw77mAP60zw+5JAIbp8GwqKa3m16TQO4IYRgg+jMrMthYymTS6xs8j1VE8xEWv7nUdo7+g2gzw9RLPMos7xPPE6S3HErxHPMRKcoH4hDjG6YDEt0JXPH4TXPT4SzDPZRcBv+gpFdtYaWNW4gbxFHHU0CuseR5xk7BqrixTHqM1DhtZpJCEBAUVbEKHgzhlk2bW2Zdo+JZQJg+jv4UqODmKKJE3RmqFuqqUNdJV+nRUxdz/z9PWZqa97uEkEHx13c8JILQP1Guu+3vquvUzIPACXJstf5nmNPdNeq2lRY+ByA5wedPSlAPgahcYebZkLjekAC2/pgEfF8BAHhi8B/rWvVk193H+BOS26YnugMMjYJLqIxt/istn1E/XuVUAAAWeSURBVHicrZZriJxnFcd/5zzPXHZmsju7m80mvYGtotZLCzYINQlSEQUrxdb4xQsK3kCM4gU/SKOIH2o/iYSC1vpB0Yi2CoqoldYKtmDtBSPZWi1oYkLLmqY7l52dy/uc44d3ptluZnaWNn94Yd55znv+5zzP+Z/zyO0fa5LDMQN3x80wd8wMHJLZdWZ2wMxuxP3alPxyszTr7tHMN8zsfEp22t1XzOwRM3vMzE66O2aOuzMOcey/F/Bm4MPA+4BrJtjUhs9VwAHgk8BTwG+Ae4G/THI+iVyAjwOfB66dEuA4vD5/5FbB73T47k7JC8A3gc8CMy+DeDOuBr4F/Mfdf791Ube8zwDHgC9eAmLAAeaAT4xb1S2/7yDf7vDKiV+CqxmTzIhcgE+RF8vW3bgUWAO6kKtJRAhBiSICcJ2ZHwHKO3S2AXQAI6+bKlC82EwAN+BXZu6qgqqwb98Si7sXiOQF9hHgdTvM4I+i3B8knHC3rojvBr/eXQ+a2X5geWTsZr1k9guQ78+USxSKRZaXFyiVS6QsEYE3Aod3QPy0qBwNGn7Waq6TZRnuw6bkdn9Kfqeq3CQi73f315h5u1guPiDI90IM/aWlBbq9PlmWKLojCBE4BFwxhfipGMNH2+3Oo72NHmuNJoNBBgj5qUGWJWq1yoMLi/MPWkpkWWJ2rkapVMLMGAwGWDJcL9RyFJEDk9rfEC+o6uc6nY1HV587R7fXJ8bw6hDCe4DLGB5soSBkmZGyLJud3dUXkZAsFS0lERVijKoashBkxd3vE5FOBN6wDbE5/DJE/UOv16fb7VMoxpvIJbl/s6GIYJZYXX2ebrfHnj27iTGSF5kSVNEggHQQ3gt8KQ6jn4R2UP11u7nOuf89T4zhVeTdb/+kD9zh/PkGMUaW9y4yVBMOowFTUdHDCKsKzG7WXgiKqqIqAG0RTmZZRq/XB+Ed2xEDjOTUarXJsjQ8lQuBbcIHIiCqyqA/YK3RotftoapUqxWKpWJyZ0NERhnsY/okRFUxMyxZLuTxWIqq2l1vd8r/PX2WTqeLhoCq0Gy2qddnZ+rzc1cIciYEBVgFElPar7sTQkB022bZ18FgcO7smedotzeIMRJCIIQA7jQazdraWnN/sVhgYWGeLEsPAE9Oy9zMKZfLxBAYDpdxATa0s979d6u9ToiBF0ULIII75c76xs39waAUY6RYjM+Y2VHgxGRiA/BarYKobD3nzXanYpZlj7v7QdlMPISqkGXZwUaj/aH5+uw9e5aXePbZ1d+mlE6p6i0ge8FlRCoi5s4L9fqud9ZqlRtxF8b4HWZ+IqaU/hxCOIKPn2YizIjwtWT2TLlc+tPi4jyDfn+l0WitjO5nsRCZX6gTVImFcE2tWrlZRGWkoi3+cAdVfTi621/d/QkRuWECOSJyZbfb/5G5f6NSmbnHSgUPMa85IW8iMzNlCoV4SyyE20He4jjjcs6JedqdR2K/n52pVis/3djo3jAuUvc8gCzLrgT7drJ0mzi/K5fLj4cgaypac/frgXc5fiiZLajoRX624F4R+VdMKdncXPXnqnK41Vp/q06QR950pGqZvTsEfbu7r5uREFNVrWrQ/KbiMDblC/g7cBxI8bLL9xKjni4WW9/pdnt3mdmc6tRbVJmdXzw2oycid7n7yTwhFcycufqunyzunj8mQpoy5V4B5Afgd4/eXtxjM6Nen/16pTJzzN0Hl4xu2JrN7Dj4V0DSReR5AJ6FEL4gIncA7WmHNxUquHtqtdbvHgyyT4O0XrI85hMDjgKfAf72sokdUmb/XFtrfrnVbB8RkeZWk+0m1A+Bx4APinAb8NpRLbhvvycinHKx+3rdwY97vf4TkxQ0bTyuAF8FOa6qbwtBD4G8SUSuEtiFow7m7i13P6ui/wAeBh7CeVJEXEQmzRb+D3vBoGTukHSMAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
)
