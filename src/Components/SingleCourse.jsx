import { Link, useParams } from 'react-router-dom';
import courses from '../Data/courses';
const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.slug);
  return (
    <>
      <h1>SingleCourse</h1>
      <h3>{course.title}</h3>
      <h3>{course.id}</h3>
      <Link to=".." relative="path">
        all courses
      </Link>
    </>
  );
};

export default SingleCourse;
