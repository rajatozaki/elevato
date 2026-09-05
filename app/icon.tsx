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
          width="20"
          height="20"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8.5L9.5 22.5H13L6.5 8.5H3Z"
            fill="#FFFFFF"
          />
          <path
            d="M8.5 22.5L18.8 3.2C19.4 2.1 20.8 1.7 21.9 2.3C23 2.9 23.4 4.3 22.8 5.4L12.5 22.5H8.5Z"
            fill="#1DB954"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
