import { useEffect } from "react";
import axios from "axios";

const SetVisits = () => {
  const userId = 123; // Puedes cambiarlo dinámicamente si lo necesitas

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post("https://courses.mvp.omt.ie.graspway.com/os-api/v1/courses/course/course-v1:edX+DemoX+Demo_Course/block/block-v1:edX+DemoX+Demo_Course+type@vertical+block@5c76f16fa6514043a25461c01a0cd9ee/visit", {
          user_id: 11,
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });

        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error al hacer el POST:", error);
      }
    };

    postData(); 
  }, []); 

  return (
    <div>
    </div>
  );
};

export default SetVisits;
