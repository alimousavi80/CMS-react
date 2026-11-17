import { COURSE_NAME, CREATOR, PRICE, STATUS, RESET } from "../actions/courses";

const updateCourseReducer = (course, action) => {
  switch (action.type) {
    case COURSE_NAME: {
      return {
        ...course,
        courseName: action.payload,
      };
    }
    case CREATOR: {
      return {
        ...course,
        creator: action.payload,
      };
    }
    case PRICE: {
      return {
        ...course,
        price: action.payload,
      };
    }
    case STATUS: {
      return {
        ...course,
        status: action.payload,
      };
    }
    case RESET: {
      return {
        ...action.payload,
      };
    }
    default: {
      return course;
    }
  }
};

export default updateCourseReducer;
