import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';

const SetVisits = () => {
  const { courseId, unitId: blockId } = useParams();
  const { authenticatedUser } = useContext(AppContext);
  
  const userId = authenticatedUser?.userId;

  useEffect(() => {
    const postData = async () => {
      if (!userId || !courseId || !blockId) {
        console.warn("Faltan datos para enviar la visita.");
        return;
      }

      const url = getConfig().OSAPI_URL

      try {
        const response = await axios.post(`${url}/v1/courses/course/${courseId}/block/${blockId}/visit`, {
          user_id: userId,
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
  }, [userId, courseId, blockId]); 

  return null;
};

export default SetVisits;
