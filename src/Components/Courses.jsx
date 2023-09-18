import { Link } from 'react-router-dom';
import courses from '../Data/courses';
const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link
            to={course.slug}
            className="courceLink"
          >{`${course.title}`}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
