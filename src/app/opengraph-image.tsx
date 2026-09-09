import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Himalaya Salud · Tu salud en tus manos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage() {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Leelawadee-UI-Bold.ttf")),
    readFile(join(process.cwd(), "public/branding/himalaya-email-logo.png")),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#EAF8F1",
          fontFamily: "Himalaya",
          color: "#0C606E",
        }}
      >
        <img
          src={"data:image/png;base64," + logo.toString("base64")}
          alt=""
          width="280"
        />
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.1,
            maxWidth: 1000,
          }}
        >
          Avisá a tus contactos cuando necesitás ayuda.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
          }}
        >
          <span>Tu salud en tus manos.</span>
          <span>himalayasalud.com.ar</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Himalaya", data: font, style: "normal", weight: 700 }],
    },
  );
}
