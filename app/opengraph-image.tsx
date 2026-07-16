import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdfcf9",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: 320,
            background: "#e8edff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 90,
            width: 130,
            height: 130,
            borderRadius: 130,
            background: "#3d6bf6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 220,
            height: 220,
            borderRadius: 48,
            background: "#fff1d9",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 60,
            width: 90,
            height: 90,
            borderRadius: 90,
            background: "#ffab1f",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 130,
            right: 160,
            width: 60,
            height: 60,
            borderRadius: 60,
            background: "#ff6452",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#ff6452",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Math + Computer Science — UCLA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 96,
              fontWeight: 800,
              color: "#29262f",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Navya Rawal
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: "sans-serif",
              fontSize: 30,
              fontWeight: 500,
              color: "#6f6b78",
              maxWidth: 900,
            }}
          >
            I build at the intersection of AI, data, robotics &amp; real-world
            impact.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
