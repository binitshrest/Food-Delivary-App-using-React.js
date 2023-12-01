import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Searchpage = () => {
    

  return (
    <div className="w-1/2 my-16 mx-auto text-left">
      <div className="flex">
        <input
          type="text"
          className="border border-solid border-gray-400 rounded-sm h-[50px] w-[950px] p-4 text-gray-700 text-lg relative"
          placeholder="Search for restaurants and food"
        />
        <div className="mt-[14px] absolute right-[400px]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            style={{ color: "#7d838c" }}
          />
        </div>
      </div>
      <div className="my-10 text-2xl font-extrabold text-gray-600 ">
        Popular Cusines
      </div>
      <div>

      </div>
    </div>
  );
};

export default Searchpage;
