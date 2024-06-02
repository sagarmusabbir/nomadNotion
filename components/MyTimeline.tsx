"use client";
import { Timeline } from "flowbite-react";

import type { FC } from "react";
import { Logo } from "./icons";

export function Iconn() {
  return <Logo className="fill-gray-600  w-5 h-5" />;
}
const MyTimeline: FC = function () {
  return (
    // <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
    <Timeline
      theme={{
        item: {
          point: {
            marker: {
              icon: {
                wrapper:
                  "absolute flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 -left-3.5 ring-8 ring-zinc-50",
              },
            },
          },
        },
      }}
    >
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>June 1990</Timeline.Time>
            <Timeline.Title>Born</Timeline.Title>
            <Timeline.Body>Hello Coders!</Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>August 2007</Timeline.Time>
            <Timeline.Title>Finished High School</Timeline.Title>
            <Timeline.Body>
              I did not have good grade, really. But I developed few ancient
              aplication with Visual basic. Really enjoyed VB
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>September 2012</Timeline.Time>
            <Timeline.Title>Finished Bachelor Degree in CS</Timeline.Title>
            <Timeline.Body>
              Well, we learned a lot of PHP centric development which I never
              used. i always loved JS. So when i came to know about React.js I
              think have started growing real interest.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>May 2024</Timeline.Time>
            <Timeline.Title>I am old!</Timeline.Title>
            <Timeline.Body>
              I gained a decade of experience in web development, having worked
              with multiple development agencies and achieved success on
              platforms like Upwork and Turing.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>August 2007</Timeline.Time>
            <Timeline.Title>Finished High School</Timeline.Title>
            <Timeline.Body>
              I did not have good grade, really. But I developed few ancient
              aplication with Visual basic. Really enjoyed VB
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={Iconn}>
          <Timeline.Content>
            <Timeline.Time>August 2007</Timeline.Time>
            <Timeline.Title>Finished High School</Timeline.Title>
            <Timeline.Body>
              I did not have good grade, really. But I developed few ancient
              aplication with Visual basic. Really enjoyed VB
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Point>
      </Timeline.Item>
    </Timeline>
    // </div>
  );
};

export default MyTimeline;
