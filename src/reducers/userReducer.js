import {
  FULL_NAME,
  EMAIL,
  PHONE_NUMBER,
  ROLE,
  USERNAME,
} from "../actions/users";

const userReducer = (user, action) => {
  switch (action.type) {
    case FULL_NAME: {
      return { ...user, fullName: action.payload };
    }

    case EMAIL: {
      return { ...user, email: action.payload };
    }

    case PHONE_NUMBER: {
      return { ...user, phoneNumber: action.payload };
    }

    case ROLE: {
      return { ...user, role: action.payload };
    }

    case USERNAME: {
      return { ...user, userName: action.payload };
    }

    default: {
      return user;
    }
  }
};

export default userReducer;
