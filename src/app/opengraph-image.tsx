import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = "Charles Vien · builder & founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        backgroundColor: "#08090c",
        backgroundImage:
          "linear-gradient(#14181f 1px, transparent 1px), linear-gradient(90deg, #14181f 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        color: "#d4dbe7",
        fontSize: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 24,
          border: "1px solid #1c212b",
          backgroundColor: "#0d0f14",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "20px 28px",
            backgroundColor: "#12151c",
            borderBottom: "1px solid #1c212b",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#f87171",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#fbbf24",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#4ade80",
            }}
          />
          <div style={{ display: "flex", marginLeft: 12, color: "#5b6473", fontSize: 24 }}>
            {alt}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: "44px 48px", gap: 16 }}>
          <div style={{ display: "flex", color: "#5b6473", fontSize: 28 }}>
            <span style={{ color: "#4ade80" }}>{profile.shell}</span>
            <span style={{ color: "#5b6473" }}>:</span>
            <span style={{ color: "#c084fc" }}>~</span>
            <span style={{ color: "#5b6473" }}>$</span>
            <span style={{ color: "#38bdf8" }}>&nbsp;whoami</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              color: "#4ade80",
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", color: "#8a94a7", fontSize: 34 }}>
            {`${profile.role} · ${profile.location}`}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 14, color: "#8a94a7", fontSize: 26 }}
        >
          10+ years building · systems used by millions
        </div>
        <div style={{ display: "flex", color: "#4ade80", fontSize: 28 }}>charlesvien.com</div>
      </div>
    </div>,
    { ...size },
  );
}
