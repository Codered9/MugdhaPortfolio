function PurchaseOrder() {
  const revamp_signals = [
    {
      heading: "1,200 Support Tickets & LUS Frustration",
      desc: "Volume of complaints and low LUS satisfaction pointed to deep usability issues.",
    },
    {
      heading: "Manual Effort for Users",
      desc: "Users had to manually track, submit, and cross-check increasing mental load.",
    },
    {
      heading: "Inconsistent UX Across Parts Modules",
      desc: "PO experience didn’t align with other modules in parts like Sales Order, Parts Receiving, etc.",
    },
    {
      heading: "Operational Inefficiencies at Dealerships",
      desc: "Stock delays, PO errors, and poor visibility disrupted inventory flow and vendor coordination.",
    },
  ];

  const methodsused = [
    {
      heading: "Flow Analysis",
      content:
        "Broke down 5+ different PO types (OEM, Vendor, Misc, Sublet, etc.), each with its own branching logic and behavior.",
    },
    {
      heading: "Service Blueprinting",
      content:
        "Visualized the full PO journey — from draft to receiving to invoice — across touchpoints, backend logic, and user roles.",
    },
    {
      heading: "Stakeholder Interviews",
      content:
        "Partnered with PMs and engineers to decode invisible business rules, sync delays, and legacy logic constraints.",
    },
    {
      heading: "Heuristic Evaluation",
      content:
        "Audited the current interface using Nielsen’s principles — revealing inconsistencies, hidden actions, and feedback failures that made the system harder to trust.",
    },
  ];

  const keyFindings = [
    {
      heading: "Multiple PO creation with the same Vendor or OEM",
      content:
        "Each PO type had its own standalone creation flow with no way to combine them. This led to multiple documents per transaction with the same vendor or OEM, making tracking, referencing, and managing orders unnecessarily complex.",
    },
    {
      heading: "Fragmented Data & Sync Gaps",
      content:
        "The Parts Receiving module didn’t update the PO in real time leaving Parts Managers with incomplete or outdated order views.",
    },
    {
      heading: "Manual Stock Calculations",
      content:
        "Users had to manually calculate stocking parameters (like quantities to reorder) the system offered no automation or assistance.",
    },
    {
      heading: "Missing Bulk Actions",
      content:
        "Core actions like deleting multiple lines or updating fields in batch weren’t available increasing effort, especially in large orders.",
    },
  ];

  return (
    <>
      <div className="">
        <div className="">
          {/* Banner */}
          <div className="bg-cus-black text-cus-white mt-20 w-[90%] h-[95vh] mx-auto flex items-end font-syne">
            <div className="ml-40 mb-24 max-w-7xl mx-auto">
              <p className="text-3xl">Tekion | Jan 2024</p>
              <h1 className="text-8xl font-semibold">Purchase Order</h1>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-16 max-w-7xl mx-auto text-cus-black font-syne">
            {/* Info/Description Section */}
            <div>
              <p className="text-2xl">
                A deep dive into modernising one of Tekion’s most-used legacy
                part purchasing experiences by aligning it with user behaviour,
                system dependencies, and real-world dealership operations.
              </p>
              <div className="mt-12 flex flex-col gap-8">
                <div className="flex text-xl">
                  <p className="flex-[30%] uppercase underline">Description</p>
                  <p className="flex-[70%] font-extralight opacity-70">
                    The Purchase Order (PO) module was a critical yet outdated
                    workflow inside Tekion’s ARC platform — heavily used by
                    Parts Managers across dealerships. While business needs had
                    evolved, the system lagged behind, leading to manual
                    workarounds, invisible errors, and operational slowdowns.
                    This project focused on rethinking the PO experience from
                    the ground up, informed by service logic, real user
                    behaviour, and dealership constraints.
                  </p>
                </div>
                <div className="flex text-xl">
                  <p className="flex-[30%] uppercase underline">Role</p>
                  <p className="flex-[70%] font-extralight opacity-70">
                    Product Designer (Graduation Project)
                  </p>
                </div>
                <div className="flex text-xl">
                  <p className="flex-[30%] uppercase underline">Duration</p>
                  <p className="flex-[70%] font-extralight opacity-70">
                    6 months
                  </p>
                </div>
                <img
                  src="/src/assets/images/purchaseorder_asset1.png"
                  alt="Random Image"
                  className="w-full h-auto my-16"
                />
              </div>
            </div>

            {/* Overview Section */}
            <div>
              <h2>Overview</h2>
              <p>
                Tekion is a fast-growing startup revolutionizing the automotive
                retail industry with cutting-edge cloud-native technology. Their
                flagship platform, ARC (Automotive Retail Cloud), unifies
                dealers, OEMs, and end-customers into a seamless digital
                ecosystem.
              </p>
              <p>
                In the complex world of dealership operations, internal
                collaboration across departments like Sales, Service, and Parts
                is crucial. Among these, Service and Parts — collectively known
                as Fixed Operations (Fixed Ops) — play a pivotal role in
                recurring revenue. These departments offer consistent,
                high-margin opportunities as dealerships can charge a premium on
                parts required during service appointments.
              </p>
              <bold>
                Often, the most profitable arm of a dealership is the Parts
                Department.
              </bold>
              <p>
                While Tekion’s ARC platform was modern and expansive, parts
                purchasing — one of the most frequent and business-critical
                tasks — was running on outdated, fragmented workflows. The
                experience was clunky, spread across multiple screens, and
                didn’t reflect how dealership employees actually work.
              </p>
            </div>

            {/* Initial Revamp Signals */}
            <div className="grid grid-cols-2 gap-8 my-16">
              <div>
                <img
                  src="/src/assets/images/purchaseorder_asset2.png"
                  alt="Random Image"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">
                  Initial{" "}
                  <span className="text-cus-orange">Revamp Signals</span>
                </h3>
                {revamp_signals.map((data, index) => (
                  <>
                    <div key={index} className="mt-4">
                      <p className="text-xl font-semibold">{data.heading}</p>
                      <p>{data.desc}</p>
                    </div>
                    {index !== revamp_signals.length - 1 && (
                      <hr className="mt-4" />
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Strategic Focus Areas */}
            <div>
              <h1>Strategic Focus Areas</h1>
              <p>
                Before diving into the research, we aligned with key
                stakeholders to understand what success would look like not just
                for users, but for the system and the business overall.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div>
                  <img
                    src="/src/assets/images/forusers.png"
                    alt="For users"
                    className="w-full"
                  />
                  <h2 className="text-2xl font-semibold mt-4">For Users</h2>
                  <p className="text-lg">
                    Reduce manual effort, eliminate redundant steps, and
                    simplify complex flows.
                  </p>
                </div>
                <div>
                  <img
                    src="/src/assets/images/forsystem.png"
                    alt="For System"
                    className="w-full"
                  />
                  <h2 className="text-2xl font-semibold mt-4">For System</h2>
                  <p className="text-lg">
                    Improve overall performance, reduce lag, and stabilize
                    backend processes.
                  </p>
                </div>
                <div>
                  <img
                    src="/src/assets/images/fordealership.png"
                    alt="For Dealership"
                    className="w-full"
                  />
                  <h2 className="text-2xl font-semibold mt-4">
                    For Dealerships
                  </h2>
                  <p className="text-lg">
                    Save time & money through better inventory flow and smarter
                    vendor relationships.
                  </p>
                </div>
              </div>
              <div className="border-1 border-cus-black p-8 my-12 text-2xl font-bold">
                These focus areas shaped our research direction — helping us
                uncover whether the real issues aligned with these goals, or
                went deeper.
              </div>
            </div>

            {/* My Roles and Responsibilities */}
            <div>
              <h1>My Roles and Responsibilities</h1>
              <p>
                I owned the end-to-end UX process for this project — from
                discovery to delivery — while working closely with my mentor and
                collaborating with the product and engineering teams.
              </p>
              <div className="flex flex-col gap-8 mt-8">
                <ul className="list-image-[url(/src/assets/images/star.svg)] text-xl">
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">System Deep Dive:</bold>{" "}
                    Mapped the entire PO journey across 5+ PO types through flow
                    breakdowns and service blueprints.
                  </li>
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">Research & Analysis:</bold>{" "}
                    Studied 1,200+ support tickets, LUS reviews, TAP requests,
                    and interviewed dealership staff to uncover real pain
                    points.
                  </li>
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">
                      Cross-Functional Collaboration:
                    </bold>{" "}
                    Aligned closely with PMs, system architects, and support
                    teams to ensure solutions were grounded in business and
                    technical realities.
                  </li>
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">Design & Prototyping:</bold>{" "}
                    Created low- to high-fidelity wireframes and interactive
                    prototypes to test and validate ideas.
                  </li>
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">
                      Usability Testing & Feedback:
                    </bold>{" "}
                    Ran walkthroughs and internal test sessions to validate the
                    new flow. Refined designs based on real-time feedback from
                    internal testers and engineers.
                  </li>
                  <li className="mt-4 pl-2">
                    <bold className="font-semibold">Final Delivery:</bold>{" "}
                    Delivered dev-ready designs, complete with annotated flows,
                    edge case handling, and role-specific logic.
                  </li>
                </ul>
              </div>
            </div>

            {/* Understanding the System */}
            <div className="mt-20">
              <h1 className="text-5xl font-semibold">
                Understanding the{" "}
                <span className="text-cus-orange">System</span>
              </h1>
              <img
                src="/src/assets/images/SystemCar.png"
                alt="Random Image"
                className="w-full h-auto mt-16"
              />
              <p>
                Before talking to users, I needed to understand what the system
                expected from them — and why it felt difficult to use. The PO
                module wasn’t a single clean flow. It was a maze of conditional
                logic, backend syncs, and outdated UI decisions.
              </p>
              <div className="flex gap-8 my-12">
                <div className="flex-[30%] bg-cus-black text-cus-white flex items-end justify-end text-right">
                  <p className="text-right mr-8 mb-8 text-2xl font-semibold">
                    Methods Used
                  </p>
                </div>
                <div className="flex-[70%] text-cus-black">
                  {methodsused.map((data, index) => (
                    <>
                      <div key={index} className="mt-4">
                        <p className="text-xl font-semibold">{data.heading}</p>
                        <p>{data.content}</p>
                      </div>
                      {index !== methodsused.length - 1 && (
                        <hr className="mt-4" />
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="flex gap-8 my-12">
                <div className="flex-[70%] text-cus-black">
                  {keyFindings.map((data, index) => (
                    <>
                      <div key={index} className="mt-4">
                        <p className="text-xl font-semibold">{data.heading}</p>
                        <p>{data.content}</p>
                      </div>
                      {index !== methodsused.length - 1 && (
                        <hr className="mt-4" />
                      )}
                    </>
                  ))}
                </div>
                <div className="flex-[30%] bg-cus-orange text-cus-white flex items-end justify-start">
                  <p className="ml-8 mb-8 text-2xl font-semibold">
                    Key Findings
                  </p>
                </div>
              </div>

              <div className="border-1 border-cus-black p-8 my-12 text-2xl font-bold">
                The biggest problem wasn’t that users didn’t know what to do —
                it’s that the system never told them. It expected dealership
                staff to work around it, not with it.
              </div>
            </div>

            {/* Understanding the Users */}
            <h3 className="text-3xl font-semibold">
              Understanding the <span className="text-cus-orange">Users</span>
            </h3>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <img
                  src="/src/assets/images/users1.png"
                  alt="Parts Manager"
                  className="w-full"
                />
                <h2 className="text-2xl font-semibold mt-4">Parts Manager</h2>
                <p className="text-lg">
                  <span>Owns the end-to-end PO process.</span> Needs visibility,
                  speed, and confidence that every part is ordered, approved,
                  received, and ready when needed.
                </p>
              </div>
              <div>
                <img
                  src="/src/assets/images/users2.png"
                  alt="For System"
                  className="w-full"
                />
                <h2 className="text-2xl font-semibold mt-4">
                  Front Counter Person
                </h2>
                <p className="text-lg">
                  Handles urgent part needs from service advisors or customers.{" "}
                  <span>
                    Needs to quickly check PO status, availability, and place
                    fast orders with minimal errors.
                  </span>
                </p>
              </div>
              <div>
                <img
                  src="/src/assets/images/users3.png"
                  alt="For Dealership"
                  className="w-full"
                />
                <h2 className="text-2xl font-semibold mt-4">
                  Back Counter Person
                </h2>
                <p className="text-lg">
                  Supports technicians with internal repair jobs.{" "}
                  <span>
                    Needs to coordinate closely with the receiving flow
                  </span>{" "}
                  and make sure parts arrive before the job stalls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseOrder;
