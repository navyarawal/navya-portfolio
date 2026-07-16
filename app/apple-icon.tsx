import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3d6bf6",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 22,
            width: 34,
            height: 34,
            borderRadius: 34,
            background: "#ffab1f",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 22,
            width: 26,
            height: 26,
            borderRadius: 26,
            background: "#ff6452",
          }}
        />
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 90,
            color: "#fdfcf9",
            letterSpacing: -4,
          }}
        >
          NR
        </div>
      </div>
    ),
    { ...size }
  );
}
