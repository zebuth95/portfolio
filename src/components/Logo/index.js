import * as React from 'react'
import { NavLogoSvg } from '../Navbar/Navbar.elements'

export const Logo = (props) => {
    return (
      <NavLogoSvg
      width={308.68}
      height={124.44}
      viewBox="95.66 12.78 308.68 124.44"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-glowing-gradient"
          x1={0.866}
          x2={0.134}
          y1={0.841}
          y2={0.159}
        >
          <stop offset={0} stopColor="#dc43ff" />
          <stop offset={1} stopColor="#6df0ff" />
        </linearGradient>
        <filter
          id="prefix__editing-glowing"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation={11.5}
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-glowing)">
        <path
          d="M13.41.64Q10.37 0 8.8-.29 7.23-.58 5.41-.58q-1.83 0-3.62.64Q.83-.51.22-1.66q-.6-1.16-.6-2.95 0-3.77 3.84-6.65l16.25-11.72q-4.54-1.28-8.67-1.28t-5.6 2.82Q3.26-24 3.26-28.03q0-2.69 1.96-4.45 1.95-1.76 6.04-1.76 2.31 0 4.39.29 2.08.29 3.93.54l3.46.51q1.66.26 3.36.26t2.98-.7q1.66 1.53 1.66 3.64 0 3.33-4.1 6.79L10.75-10.82q4.99 1.48 7.55 1.48 5.38 0 7.68-2.56 1.8 2.04 1.8 5.6 0 3.55-2.31 5.56-2.3 2.02-6.46 2.02-2.56 0-5.6-.64zm45.85-11.46q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82Q56-23.3 56-27.58q0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM66.56-3.07L74.5-44.8l12.99-1.28-1.99 9.79q-.7 3.01-1.6 5.12 1.41-1.79 4.48-2.49.9-.26 1.99-.26 5.95 0 9.21 3.62 3.27 3.61 3.27 10.59 0 9.09-5.19 14.78-5.56 6.21-15.68 6.21-6.97 0-12.22-2.3-1.86-.84-3.2-2.05zM82.82-22.4l-3.4 18.75q1.35 1.15 3.01 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.45 3.46-14.01.44-3.01.44-6.02t-.67-3.97q-.67-.96-1.95-.96-3.9 0-5.18 7.62zm44.41 19.71q-3.07 3.97-10.69 3.97-3.96 0-6.84-2.4t-2.88-5.86q0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.26 1.41-.26 2.24 0 3.72 2.24 3.72 2.5 0 4.29-3.4.57-1.08.83-2.49l4.54-23.49 12.61-1.28-4.73 24.96q-.2.96-.2 1.98 0 1.03.58 2.15.58 1.12 2.43 1.37-.38 1.54-1.73 2.56-2.81 2.18-5.85 2.18-3.04 0-4.83-1.09-1.8-1.09-2.31-2.88zm21.12-3.71q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63zm54.27-.7q0 2.81 2.88 3.64-.7 2.37-3.45 3.65-2.31 1.09-4.83 1.09-2.53 0-3.84-.67-1.32-.67-2.02-1.76-1.15-1.67-1.15-4.8 0-1.86 1.02-6.98l.9-4.86q1.09-5.57 1.09-7.62 0-3.58-1.99-3.58-2.49 0-4.09 3.65-.64 1.4-1.09 3.52L181.7 0l-12.87 1.28 9.03-46.08 12.86-1.28-.51 2.56q-1.79 9.86-3.33 13.18 3.58-3.58 10.18-3.58 6.97 0 8.25 4.61.45 1.47.45 2.75t-.1 2.27q-.09.99-.41 2.79l-.83 4.6-1.48 7.24q-.32 1.47-.32 2.56z"
          fill="url(#prefix__editing-glowing-gradient)"
          transform="translate(146.869 98.68)"
        />
      </g>
      <style />
    </NavLogoSvg>
  )
}