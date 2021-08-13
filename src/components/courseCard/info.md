Course Card UI Component Required Props:

- id
- title
- thumbnail
- author
- rating
- rateCount
- level
- timeEstimate

level's values must be:
beginner, intermediate, advanced

Example:
<CourseCard
  id={index}
  title={val.title}
  thumbnail={val.thumbnail}
  author={val.author}
  rating={val.rating}
  rateCount={val.rateCount}
  level={val.difficulty}
  timeEstimate={val.timeEstimate}
/>
