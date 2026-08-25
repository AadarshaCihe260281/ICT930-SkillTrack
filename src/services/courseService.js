import courses from "../data/courses.json";

export function getCourses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (courses.length) {
        resolve(courses);
      } else {
        reject(new Error("No course data is available."));
      }
    }, 700);
  });
}

export function getCourseById(id) {
  return getCourses().then((items) => {
    const course = items.find((item) => item.id === Number(id));
    if (!course) throw new Error("Course not found.");
    return course;
  });
}