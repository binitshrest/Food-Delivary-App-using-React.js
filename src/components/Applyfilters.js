import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Applyfilters = () => {
  return (
    <div className="flex ml-4 space-x-4">
      <button className="h-10 w-24 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Filter</span>
        <FontAwesomeIcon icon={faArrowUpZA} style={{ color: "#000000" }} />
      </button>
      <button className="h-10 w-24 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Sort By</span>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000" }} />
      </button>
    </div>
  );
};

export default Applyfilters;
