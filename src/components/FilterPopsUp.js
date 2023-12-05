import useFilters from "../utils/useFilters";
import Filterdata from "./filterdata";

const FilterPopsUp = ({ open, onClose }) => {
  if (!open) return null;
  const filters = useFilters();
  return (
    <div>
      <div className="flex">
        <span className="text-3xl font-bold text-gray-600 ml-4 pb-4">
          Filter
        </span>
        <p onClick={onClose}>X</p>
      </div>

      <div className="flex flex-col">
        {filters?.map((item) => (
          <Filterdata filterData={item} />
        ))}
      </div>
    </div>
  );
};

export default FilterPopsUp;
