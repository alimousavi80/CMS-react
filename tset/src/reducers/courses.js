import { COURSE_NAME, CREATOR, PRICE, STATUS } from "../actions/courses";

export const courseReducer = (course, action) => {
  switch (action.type) {
    case "COURSE_NAME": {
      return {
        ...course,
        courseName: action.payload,
      };
    }
    case "CREATOR": {
      return {
        ...course,
        creator: action.payload,
      };
    }
    case "PRICE": {
      return {
        ...course,
        price: action.payload,
      };
    }
    case "STATUS": {
      return {
        ...course,
        status: action.payload,
      };
    }
    default: {
      return course;
    }
  }
};
