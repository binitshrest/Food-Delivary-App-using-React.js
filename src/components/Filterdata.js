const Filterdata = (props) => {
  const { filterData } = props;
  const { label } = filterData;
  return (
    <div className="px-4 py-2 h-14 w-2/6 ml-4 pr-36 border">
      <span className="text-xl font-semibold text-gray-400">{label}</span>
    </div>
  );
};
export default Filterdata;
