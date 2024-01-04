import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Work } from "@mui/icons-material";
import { School } from "@mui/icons-material";

const styles = {
  work: {
    contentStyle: {
      background: "rgb(33, 150, 243)",
      color: "#fff",
      boxShadow: "none",
    },
    arrowStyle: "7px solid rgb(33, 150, 243)",
    iconStyle: {
      background: "rgb(33, 150, 243)",
      color: "#fff",
    },
  },
  education: {
    contentStyle: {
      background: "rgb(233, 30, 99)",
      color: "#fff",
      boxShadow: "none",
    },
    arrowStyle: "7px solid rgb(233, 30, 99)",
    iconStyle: {
      background: "rgb(233, 30, 99)",
      color: "#fff",
    },
  },
};

 const TimelineElement = ({ data }) => {
  const typeStyles = styles[data.type];
  const Icon = data.type === "work" ? Work : School;

  return (
    <VerticalTimeline layout="1-column-left">
      <VerticalTimelineElement
        className={`vertical-timeline-element--${data.type}`}
        date={data.date}
        contentStyle={typeStyles.contentStyle}
        contentArrowStyle={{ borderRight: typeStyles.arrowStyle }}
        iconStyle={typeStyles.iconStyle}
        icon={<Icon />}
      >
        <h1 className="text-white text-xl antialiased vertical-timeline-element-title font-semibold">
          {data.title}
        </h1>
        <h3 className="vertical-timeline-element-subtitle">
          {data.subtitle}
          <span className=""> • {data.location}</span>
        </h3>
        <p className="">{data.description}</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimelineElement;