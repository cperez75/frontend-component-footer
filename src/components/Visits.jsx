import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AppContext } from '@edx/frontend-platform/react';

const SetVisits = () => {
  const { courseId, unitId: blockId } = useParams();

  console.log(courseId)
  console.log(blockId)

  const { authenticatedUser } = useContext(AppContext);
  console.log(authenticatedUser)
  
  const userId = authenticatedUser?.userId;

  useEffect(() => {
    const postData = async () => {
      console.log(userId)
      

      if (!userId || !courseId || !blockId) {
        console.warn("Faltan datos para enviar la visita.");
        return;
      }

      try {
        const response = await axios.post("https://courses.mvp.omt.ie.graspway.com/os-api/v1/courses/course/{courseId}/block/{blockId}/visit", {
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
