"use client";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import type { FC } from "react";
import { Logo } from "./icons";

export function Iconn() {
  return <Logo className="fill-zinc-600  w-5 h-5" />;
}
const DefaultEventSchedule: FC = function () {
  return (
    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
      <Timeline
        theme={{
          item: {
            point: {
              marker: {
                icon: {
                  wrapper:
                    "absolute flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 -left-3.5 ring-8 ring-slate-50",
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
              <Timeline.Body>
                Scaling a business means setting the stage to enable and support
                growth in your company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Point>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={Iconn}>
            <Timeline.Content>
              <Timeline.Time>June 1990</Timeline.Time>
              <Timeline.Title>Born</Timeline.Title>
              <Timeline.Body>
                Scaling a business means setting the stage to enable and support
                growth in your company. Scaling a business means setting the
                stage to enable and support growth in your company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Point>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={Iconn}>
            <Timeline.Content>
              <Timeline.Time>June 1990</Timeline.Time>
              <Timeline.Title>Born</Timeline.Title>
              <Timeline.Body>
                Scaling a business means setting the stage to enable and support
                growth in your company. Scaling a business means setting the
                stage to enable and support growth in your company. Scaling a
                business means setting the stage to enable and support growth in
                your company. Scaling a business means setting the stage to
                enable and support growth in your company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Point>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={Iconn}>
            <Timeline.Content>
              <Timeline.Time>June 1990</Timeline.Time>
              <Timeline.Title>Born</Timeline.Title>
              <Timeline.Body>
                Scaling a business means setting the stage to enable and support
                growth in your company. Scaling a business means setting the
                stage to enable and support growth in your company.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Point>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default DefaultEventSchedule;
