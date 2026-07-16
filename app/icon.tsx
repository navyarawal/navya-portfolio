import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 9,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 4,
            right: 4,
            width: 8,
            height: 8,
            borderRadius: 8,
            background: "#ffab1f",
          }}
        />
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#fdfcf9",
            letterSpacing: -1,
          }}
        >
          NR
        </div>
      </div>
    ),
    { ...size }
  );
}
