import type { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import type { ReactElement } from "react";

export const runtime = "edge";

const interSemiBold = fetch(
  new URL("./Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const isLight = req.headers.get("Sec-CH-Prefers-Color-Scheme") === "light";

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Musabbirs Terminal";

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLight ? <LightSvg /> : <DarkSvg />}
          <div
            style={{
              position: "absolute",
              fontFamily: "Inter",
              fontSize: "48px",
              fontWeight: "600",
              letterSpacing: "-0.04em",
              color: isLight ? "black" : "white",
              top: "250px",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "pre-wrap",
              maxWidth: "750px",
              textAlign: "center",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {title}
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

function LightSvg(): ReactElement {
  return (
    <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
      <div tw="bg-gray-50 flex w-full">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
            <span>Ready to dive in?</span>
            <span tw="text-indigo-600">Start your free trial today.</span>
          </h2>
          <div tw="mt-8 flex md:mt-0">
            <div tw="flex rounded-md shadow">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">
                Get started
              </a>
            </div>
            <div tw="ml-3 flex rounded-md shadow">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkSvg(): ReactElement {
  return (
    <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
      <div tw="bg-gray-50 flex w-full">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
            <span>Ready to dive in?</span>
            <span tw="text-indigo-600">Start your free trial today.</span>
          </h2>
          <div tw="mt-8 flex md:mt-0">
            <div tw="flex rounded-md shadow">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">
                Get started
              </a>
            </div>
            <div tw="ml-3 flex rounded-md shadow">
              <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
