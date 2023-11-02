import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { getPhotos } from "../../Utils/Axios/api";

import { SwiperComponnet } from "../../Components/Swiper";
import { BottomDate } from "../../Components/BottomDate";

const Home = () => {
  const [photo, setPhoto] = useState([
    {
      url: "",
    },
  ]);

  useEffect(() => {
    axios.get(getPhotos).then((response: any) => {
      setPhoto(response.data);
    });
  }, []);

  const RenderPhoto = useCallback(() => {
    return <SwiperComponnet dataApi={photo} />;
  }, [photo]);

  return (
      <div
      className="flex flex-col justify-center items-center"
      >
        <div className="w-11/12 md:w-10/12 lg:w-3/12 flex justify-center items-center mt-3">
        <RenderPhoto />
        </div>
      <BottomDate/>
      </div>
  );
};

export default Home;
