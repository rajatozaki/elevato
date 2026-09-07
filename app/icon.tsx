import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADIUlEQVR42s2XW08TQRTH+wk6291u2YUKBpPGYgKtgqEobSRRmvCkgdCqsX1ALiESDFL5ApjUd3kQiQRMoMIDmHjhjUvig+EiKl4iFEIMiUGlXVq3b8fM2E5ZwiXUbesm/0x2z+w5vzkzsztHo4lfophbwrLcEMfptxhGB2pKp8NiQa/nQyzLDeNYmp2XwZDjRoiRtVoEmRCOhWOS4IIoWjIZfCeEKIpWDctygUwHT4hl2REMEMoeABfWIMRAtgBw7CwDoNQAysvLYXpmCmZmpkiLVVFxLiWIlABGR0dAjkUVGg4MZQagqqoKfssRiMWiRHK8jUQlkpm0A7x4+ZyOWtoOgSRtUZDBwYH0AtTU1IAsJ9Pe2/sQ+vsfJ4GkEFgs1vQA4H5T05M02OaP73DSbIbS0lLYjoRpFvr6HqUHwOV2KRZd971uaht8MkCfh8NbUFxcrC4A/pPNzr6hQdbX1yA/P5/abTYbRKMStff0PFD3O+D1emiKsTo77/y1MQi0OgRalNyauN/PX5tgMpnUAWBZDhbfLdDgHz8tAc8biM3edBZaxt1Q3WEHh8NBtmcCwn/fr86nuLGxUTH3Tc1N1IYBmsdccKnDTu4nJl7Rfhsb38BoNP5bBnieJyNOOH27uAAcpwfbDStUd1XCeW8ZlDiLoNB6nPSvq6tTwHZ13T0cgGH2B2hvb1c4dLvd5Pll/0VoGXdBxfUzuxarDubmZ2n/leBXyMkRUtsFopgLq6sr1Nn060k4UVYAhWUF4PQ5oNbvhBLnKcVocNtws0EB3dZ2a3+Ag6bA5/MlHckRqPVegeaxejLnRXbTns6wLz3Pw+cvH+m7H5beA8dxR8tAXl4erK4FqZPxZ2OQaxLjAPVg3g2A4kpM3W3l1Hk8nqMtwtbWVlgJLkMwuEzayko78EYeLrTYiI6ZjXuOPnEvCCLML8yRd7ECTwPqngdUE0L/wZHsoG2YkUMpPhpn8VguYYCRLBYmoxpBEK0IMbEszH9MEMTTpD7kecPVTBenPG+4pqiQBUG04NIZl2p4cRwkvHAP67PXOxynD+NaFBfEibh/AON67C7Fm0Y/AAAAAElFTkSuQmCC"
        width={32}
        height={32}
        style={{ width: '100%', height: '100%', borderRadius: '6px' }}
      />
    ),
    { ...size }
  );
}
