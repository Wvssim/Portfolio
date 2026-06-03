import { ImageResponse } from 'next/og'

export const alt = 'Wassim Lazim — Engineer · Founder · Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'radial-gradient(120% 120% at 80% 0%, #1b140a 0%, #110D07 55%)',
          padding: '76px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '54px', height: '2px', background: '#B8862A' }} />
          <div style={{ color: '#B8862A', fontSize: '26px', letterSpacing: '8px' }}>
            ENGINEER · FOUNDER · BUILDER
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: '128px', fontWeight: 700, color: '#F7F2E9', lineHeight: 1 }}>
            <span>Wassim Lazim</span>
            <span style={{ color: '#B8862A' }}>.</span>
          </div>
          <div style={{ display: 'flex', fontSize: '32px', color: 'rgba(247,242,233,0.6)', marginTop: '28px' }}>
            Full-stack across web · mobile · IoT · AI · systems
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', color: 'rgba(247,242,233,0.45)', fontSize: '24px' }}>
            Solo founder of a live B2B platform
          </div>
          <div style={{ display: 'flex', color: '#B8862A', fontSize: '40px', fontWeight: 700 }}>{'</>'}</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
