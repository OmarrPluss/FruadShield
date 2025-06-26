import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faPlusCircle,
  faEdit,
  faPowerOff,
  faPlay,
  faTrash,
  faTachometerAlt,
  faChartLine,
  faExclamationTriangle,
  faUsers,
  faCommentDots,
  faRobot,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

// Map string names to FontAwesome icons
const iconMap = {
  gavel: faGavel,
  "plus-circle": faPlusCircle,
  edit: faEdit,
  "power-off": faPowerOff,
  play: faPlay,
  trash: faTrash,
  "tachometer-alt": faTachometerAlt,
  "chart-line": faChartLine,
  "exclamation-triangle": faExclamationTriangle,
  users: faUsers,
  "comment-dots": faCommentDots,
  robot: faRobot,
  cog: faCog,
};

export function FaIcon({ icon, ...props }) {
  return <FontAwesomeIcon icon={iconMap[icon] || faGavel} {...props} />;
}