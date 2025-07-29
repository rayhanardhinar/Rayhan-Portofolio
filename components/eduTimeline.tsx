"use client";

import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function EduTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent data-aos="zoom-in-left" data-aos-delay="200">
          <TimelineTime>August 2021 - January 2025</TimelineTime>
          <TimelineTitle>Universitas Negeri Malang</TimelineTitle>
          <TimelineBody className="text-sm !text-secondary-light">
            Informatics Engineering
          </TimelineBody>
          <TimelineBody className="text-sm">GPA : 3.78/4.00</TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent data-aos="zoom-in-left" data-aos-delay="400">
          <TimelineTime>July 2018 - July 2021</TimelineTime>
          <TimelineTitle>SMA Nahdlatul Ulama 1 Gresik</TimelineTitle>
          <TimelineBody className="text-sm !text-secondary-light">
            IPA
          </TimelineBody>
          <TimelineBody className="text-sm">GPA : 89.00/100.00</TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
