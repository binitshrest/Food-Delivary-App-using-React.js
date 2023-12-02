import { CDN_LINK } from "../utils/constants";

const BannerCard = (props) => {
  const { imageId } = props;
  console.log(props);

  return (
    <div className="m-5 h-[250px] w-[700px]">
      <img
        alt="Banner-logo"
        className="res-logo rounded-lg h-[250px] w-[600px] "
        src={CDN_LINK + imageId}
      />
    </div>
  );
};

export default BannerCard;
