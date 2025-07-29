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

export default function WorkTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent data-aos="zoom-in-right" data-aos-delay="200">
          <TimelineTime>May 2024 - January 2025</TimelineTime>
          <TimelineTitle>LSP P-1 UM</TimelineTitle>
          <TimelineBody className="text-sm !text-secondary-light">
            Staff Administration
          </TimelineBody>
          <TimelineBody className="text-sm">
            An institution that conducts professional certification activities
            and is licensed by the National Professional Certification Agency
            (BNSP). The license is granted through an accreditation process by
            BNSP, which confirms that the respective Certification Body (LSP)
            has met the requirements to carry out professional certification
            activities.
          </TimelineBody>
          <a
            href="https://lsp.um.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center btn-secondary !px-3 !py-1.5">
              Visit Company
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </a>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent data-aos="zoom-in-right" data-aos-delay="400">
          <TimelineTime>February 2024 - August 2024</TimelineTime>
          <TimelineTitle>Dicoding BDT 2024 Bootcamp</TimelineTitle>
          <TimelineBody className="text-sm !text-secondary-light">
            Fullstack Web Developer
          </TimelineBody>
          <TimelineBody className="text-sm">
            Baparekraf Digital Talent (BDT) Web Development Bootcamp 2024,
            organized by BAPAREKRAF in collaboration with Dicoding Indonesia, is
            an intensive program under the Ministry of Tourism and Creative
            Economy/Baparekraf. It aims to train talents who meet industry
            standards and contribute to strengthening the digital economy
            ecosystem.
          </TimelineBody>
          <a
            href="https://www.dicoding.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center btn-secondary !px-3 !py-1.5">
              Visit Company
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </button>
          </a>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent data-aos="zoom-in-right" data-aos-delay="600">
          <TimelineTime>April 2024 - July 2024</TimelineTime>
          <TimelineTitle>Food.Co</TimelineTitle>
          <TimelineBody className="text-sm !text-secondary-light">
            Front End Web Developer
          </TimelineBody>
          <TimelineBody className="text-sm">
            Food.Co is a website project for ordering menus from one of the food
            courts in Tangerang using Whatsapp API.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
