const LIMITEDCOURSES = `https://api.faztweb.com/courses?limit=3&released=true&type=course`;

export default async function getCoursesData() {
  const data = await fetch(LIMITEDCOURSES);
  return data.json();
}
