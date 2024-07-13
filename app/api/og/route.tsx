import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import type { ReactElement } from "react";
import { Logo } from "@/components/icons";
import { links, siteData } from "@/site";

export const runtime = "edge";

const interSemiBold = fetch(
  new URL("./Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBlack = fetch(new URL("./Inter-Black.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

const avatar =
  "https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/a3d74c582b0d3c00a526c6452b7ccacf1052f24d/public/avatar.svg";

const author = siteData.author;
const url = siteData.websiteUrl;
const logo =
  "https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/a3d74c582b0d3c00a526c6452b7ccacf1052f24d/public/Logo.svg";

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Musabbirs Terminal";

    const description = searchParams.has("description")
      ? searchParams.get("description")
      : "Creator of Third Bracket Solutions, Nomad Gang Labs and Literature Review UK.";

    return new ImageResponse(
      (
        <div
          tw={`h-full w-full px-20 py-16 flex flex-col justify-between `}
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/sagarmusabbir/tb/main/public/cover-mint.svg")`,
          }}
          // tw={`h-full w-full bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-100 flex flex-col justify-between px-20 py-16`}
        >
          <h1
            tw="text-[100px] leading-none text-white"
            style={{ fontFamily: "interBlack" }}
          >
            {title}
          </h1>
          <p
            tw="mb-8 text-5xl text-slate-300 leading-tight"
            style={{ fontFamily: "interBlack" }}
          >
            {description}
          </p>
          <code
            tw="mb-8 text-3xl text-slate-200 leading-tight"
            style={{ fontFamily: "interBlack" }}
          >
            {url}
          </code>
          <div tw="w-full flex flex-row items-center">
            {avatar?.startsWith("http") ? (
              <picture>
                <img
                  src={avatar}
                  tw={`mr-4`}
                  alt="musabbirs-avatar"
                  width={48}
                  height={48}
                />
              </picture>
            ) : (
              <span tw="mr-4 text-4xl">{avatar}</span>
            )}
            <span
              tw={`text-4xl text-slate-50 mr-auto`}
              style={{ fontFamily: "interBlack" }}
            >
              {author}
            </span>
            {logo?.startsWith("http") ? (
              <picture>
                <source
                  srcSet="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/a3d74c582b0d3c00a526c6452b7ccacf1052f24d/public/Logo.svg"
                  type="image/svg"
                />
                {/* <source srcSet="https://example.com/hero.webp" type="image/webp" /> */}
                <img
                  src={logo}
                  width={48}
                  height={48}
                  alt="musabbirs-terminal"
                />
              </picture>
            ) : (
              <span tw="text-4xl">{logo}</span>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
