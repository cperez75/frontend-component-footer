import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext, AppContext } from '@edx/frontend-platform/react';

const SetVisits = () => {
  const { courseId, unitId: blockId } = useParams();

  console.log(courseId)
  console.log(blockId)

  const { authenticatedUser } = useContext(AppContext);
  const userId = authenticatedUser?.id;

  useEffect(() => {
    const postData = async () => {
      console.log(userId)
      

      if (!userId || !courseId || !blockId) {
        console.warn("Faltan datos para enviar la visita.");
        return;
      }

      try {
        const response = await axios.post("https://courses.mvp.omt.ie.graspway.com/os-api/v1/courses/course/course-v1:edX+DemoX+Demo_Course/block/block-v1:edX+DemoX+Demo_Course+type@vertical+block@5c76f16fa6514043a25461c01a0cd9ee/visit", {
          user_id: userId,
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });
        console.log("courseId: ", courseId)
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error al hacer el POST:", error);
      }
    };

    postData(); 
  }, [userId, courseId, blockId]); 

  return null;
};

export default SetVisits;
