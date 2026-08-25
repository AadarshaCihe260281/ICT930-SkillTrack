import { createContext, useMemo, useState } from "react";

export const AppContext = createContext(null);

const initialUser = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  goal: "Become a confident frontend developer"
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [theme, setTheme] = useState("light");

  const enrolCourse = (course) => {
    setEnrolledCourses((current) => {
      if (current.some((item) => item.id === course.id)) return current;
      return [...current, { ...course, completedLessons: [], progress: 0 }];
    });
  };

  const isEnrolled = (courseId) =>
    enrolledCourses.some((course) => course.id === courseId);

  const completeLesson = (courseId, lesson) => {
    setEnrolledCourses((current) =>
      current.map((course) => {
        if (course.id !== courseId) return course;

        const completedLessons = course.completedLessons.includes(lesson)
          ? course.completedLessons.filter((item) => item !== lesson)
          : [...course.completedLessons, lesson];

        const progress = Math.round(
          (completedLessons.length / course.lessons.length) * 100
        );

        return { ...course, completedLessons, progress };
      })
    );
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      enrolledCourses,
      enrolCourse,
      isEnrolled,
      completeLesson,
      theme,
      toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light")
    }),
    [user, enrolledCourses, theme]
  );

  return (
    <AppContext.Provider value={value}>
      <div className={theme === "dark" ? "app dark" : "app"}>{children}</div>
    </AppContext.Provider>
  );
}