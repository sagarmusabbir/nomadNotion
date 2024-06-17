import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import type { ReactElement } from "react";
import { Logo } from "@/components/icons";
import { links } from "@/site";

export const runtime = "edge";

const interSemiBold = fetch(
  new URL("./Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const { searchParams } = new URL(req.url);
    // const isLight = req.headers.get("Sec-CH-Prefers-Color-Scheme") === "light";

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Musabbirs Terminal";

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center  bg-black">
          <div tw="flex flex-col items-center justify-center h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-slate-300">
            <div
              style={{
                display: "flex",
                fontSize: 40,
                color: "black",
                background: "white",
                width: "50",
                height: "50",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo />
            </div>

            <h2 tw="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-left font-interSemiBold">
              Musabbir Sagar
              <span tw="text-slate-50 border-l pl-3 ml-3 border-white">
                {title}
              </span>
            </h2>
            <h4 tw="text-white text-xl mt-0">musabbirsagar.com</h4>
          </div>
        </div>
      ),
      {
        width: 843,
        height: 441,
        fonts: [
          {
            name: "Inter",
            data: await interSemiBold,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    // eslint-disable-next-line no-console
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
