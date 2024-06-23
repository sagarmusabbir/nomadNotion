import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import type { ReactElement } from "react";
import { Logo } from "@/components/icons";
import { links, siteData } from "@/site";

export const runtime = "edge";

const interSemiBold = fetch(
  new URL("./Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const avatar =
  "https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/a3d74c582b0d3c00a526c6452b7ccacf1052f24d/public/avatar.svg";

const author = siteData.author;
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
          tw={`h-full w-full px-20 py-16 bg-gray-950 border border-gray-800 flex flex-col justify-between`}
          // tw={`h-full w-full bg-slate-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-100 flex flex-col justify-between px-20 py-16`}
        >
          <h1
            tw="text-8xl leading-none text-slate-50"
            style={{ fontFamily: "interSemiBold" }}
          >
            {title}
          </h1>
          <p
            tw="mb-16 text-5xl text-slate-50 leading-tight"
            style={{ fontFamily: "interSemiBold" }}
          >
            {description}
          </p>
          <div tw="w-full flex flex-row items-center">
            {avatar?.startsWith("http") ? (
              <img
                src={avatar}
                tw={`mr-4 h-14 w-14 bg-gray-800 rounded-full`}
              />
            ) : (
              <span tw="mr-4 text-5xl">{avatar}</span>
            )}
            <span
              tw={`text-5xl text-slate-200 mr-auto`}
              style={{ fontFamily: "interSemiBold" }}
            >
              {author}
            </span>
            {logo?.startsWith("http") ? (
              <img src={logo} tw="h-14 w-14" />
            ) : (
              <span tw="text-5xl">{logo}</span>
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
