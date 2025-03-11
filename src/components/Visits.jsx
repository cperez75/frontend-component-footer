import { useEffect } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';
import { useModel } from '@edx/frontend-platform/react'; // Importamos useModel

const SetVisits = () => {
  /*const userId = 11; // Puedes cambiarlo dinámicamente si lo necesitas
  var _useParams = useParams(),
    courseId = _useParams.courseId;*/

  const { user } = useModel('user');
  const userId = user?.id;

  // Obtener información del curso y bloque
  const { courseId, unitId } = useModel('course');

  useEffect(() => {
    const postData = async () => {
      caseonsole.log(userId)
      console.log(courseId)
      console.log(unitId)

      if (!userId || !courseId || !unitId) {
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
  }, [userId, courseId, unitId]); 

  return null;
};

export default SetVisits;
