import HorizontalScrollCards from "../components/HorizontalScroll";

export default function Horizontal() {
  const webDevInfo = [
    {
      id: 1,
      title: "Discovery <br /> & Requirements",
      description:
        "We don't build on guesses. <br />Our websites start with clear requirements, <br />goals, and user journeys so the development <br />is aligned with real business needs.",
    },
    {
      id: 2,
      title: "Architecture, <br /> Wireframes & Flows",
      description:
        "From simple sites to complex <br />web apps, we plan the structure, flows, <br />and layouts so every page has a clear <br />purpose and leads users to action.",
    },
    {
      id: 3,
      title: "Pixel-perfect <br /> Frontend Development",
      description:
        "We turn designs into responsive, <br />fast, and clean code – using modern web <br />standards to make sure your website looks <br />and works great on every device.",
    },
    {
      id: 4,
      title: "Scalable & <br /> Data-Driven Web Builds",
      description:
        "We use best practices, testing, <br />and analytics to improve speed, stability, <br />and conversions, so your website keeps <br />getting better with real data over time.",
    },
    {
      id: 5,
      title: "Seamless <br /> API Integrations",
      description:
        "Connect your tools effortlessly. <br />We integrate payment gateways, CRMs, <br />and third-party APIs to ensure your <br />ecosystem works as one unified engine.",
    },
    {
      id: 6,
      title: "Post-Launch <br /> Support & Growth",
      description:
        "Launch is just day one. <br />We provide ongoing maintenance, security <br />updates, and feature enhancements to <br />keep your platform ahead of the curve.",
    },
  ];

  return (
    <div className="relative z-20 -mt-50">
      <HorizontalScrollCards cards={webDevInfo} />
    </div>
  );
}
