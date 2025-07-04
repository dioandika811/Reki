import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiChampions } from "react-icons/gi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2014"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiChampions />}
          >
            <h3 className="vertical-timeline-element-title">Harapan 2</h3>
            <h4 className="vertical-timeline-element-subtitle">Catur</h4>
            <p>
              Ketika saya Sd saya mengikuti kompetisi Catur mewakili sekolah
              saya dan alhamdulillah hanya sampai peringkat 5 (harapan 2)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiChampions />}
          >
            <h3 className="vertical-timeline-element-title">Juara 1</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cerdas cermat
            </h4>
            <p>
              Ketika saya SMP saya mengikuti kompetisi Cerdas Cermat mewakili
              sekolah saya dan saya meraih Juara 1
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
