import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#121212',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#FFFFFF">
            <polygon points="6,86 23,86 23,71 12,71" />
            <polygon points="35,12 47,12 47,46 35,46" />
            <polygon points="47,12 60,12 94,86 77,86 49,28" />
          </g>
          <g fill="#1DB954">
            <rect x="23" y="71" width="10" height="10" rx="0.5" />
            <rect x="31" y="60" width="10" height="10" rx="0.5" />
            <rect x="39" y="49" width="10" height="10" rx="0.5" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
