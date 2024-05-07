import React from "react";

const Timeline = () => {
  return (
    <div className="mx-auto max-w-md my-12 md:max-w-xl ">
      <div className=" mt-14 mb-16 divider flex justify-center items-center divider-neutral">
        <h2 className="text-4xl text-white font-bold my-0">Timeline</h2>
      </div>
      <ul className="prose timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10 gap-4">
            <time className="font-mono italic">Feb 2024 - Present</time>
            <div className="text-lg font-black text-secondary">
              Junior Developer
            </div>
            <div className="text-lg font-medium text-secondary">
              🏢 Black Capital Technology
            </div>
            <ul className="text-left">
              <li>
                Collaborating with the development team to fix bug issues.
              </li>
              <li>
                Worked on adding new funtionalities to the software, following
                best practices and coding standards.
              </li>
              <li>
                Developed new features ensuring they met the project requirement
                and were integrated seamlessly into the existing system.
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">May 2023 - Feb 2024</time>
            <div className="text-lg font-black text-secondary">
              Junior Developer
            </div>
            <div className="text-lg font-medium text-secondary">
              🏢 Progressify ApS
            </div>
            <ul className="text-left">
              <li>
                Participated in daily standups and used Jira to manage tickets
                for tasking.
              </li>
              <li>Identified edge cases and performed end-to-end testing.</li>
              <li>
                Collaborated effectively in Agile development across different
                time zones with a team of 4 people, delivering results remotely
                and on-time.
              </li>
              <li>
                Designed and developed an admin dashboard and implemented main
                CRUD functions for the CMS backend controls of the said core
                feature as part of a team.
              </li>
              <li>
                Developed frontend components to build a components library
              </li>
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">January 2023 - May 2023</time>
            <div className="text-lg font-black text-secondary">
              Developer Intern
            </div>
            <div className="text-lg font-medium text-secondary">
              🏢 Progressify ApS
            </div>
            {/* list of responsibilities */}
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end  mb-10">
            <time className="font-mono italic">May 2023</time>
            <div className="text-lg font-black text-secondary">
              Graduated with a Bachelor's degree in Science in Information
              Technology
            </div>
            <div className="text-lg font-medium text-secondary">
              🏫 University of San Jose - Recoletos
            </div>
            {/* List of academic accomplishments */}
          </div>
          {/* <hr /> */}
        </li>
        {/* <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It
            incorporates fitness tracking, health-oriented capabilities, and
            wireless telecommunication, and integrates with iOS and other Apple
            products and services
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Timeline;
