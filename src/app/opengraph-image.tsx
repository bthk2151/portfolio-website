import { ImageResponse } from "next/og";

export const alt = "Bryan Tan — Thoughtful code. Meaningful impact.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background: "#131716",
        color: "#efeee7",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: 3,
        }}
      >
        <span>BRYAN TAN</span>
        <span style={{ color: "#a7afa9", fontSize: 16 }}>
          SOFTWARE ENGINEER · MALAYSIA
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 87,
          lineHeight: 1.06,
          letterSpacing: -4,
        }}
      >
        <span>Thoughtful code.</span>
        <span style={{ display: "flex", gap: 20 }}>
          <span>Driving</span>
          <span style={{ color: "#dba786" }}>impact.</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #333b35",
          paddingTop: 24,
          fontSize: 18,
        }}
      >
        <span style={{ color: "#a7afa9" }}>
          Full-stack development. Systems. Integrations.
        </span>
        <span style={{ color: "#dba786" }}>bthk2151.dev</span>
      </div>
    </div>,
    size,
  );
}
