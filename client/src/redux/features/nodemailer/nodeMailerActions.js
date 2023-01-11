import axios from "axios";

export const putSuccesOrder = (orderDetails) => async (dispatch) => {
  try {
    const successMail = await axios.put(`/success-order`, orderDetails);
    return successMail.data[0]
  } catch (error) {
    return error;
  }
};

export const putUserDeleted = (email) => async (dispatch) => {
  try {
    const userDeletedMail = await axios.put(`/user-deleted`, email);
    return userDeletedMail.data[0]
  } catch (error) {
    return error;
  }
};

export const putUserSuspended = (email) => async (dispatch) => {
  try {
    const userSuspendedEmail = await axios.put(`/user-suspended`, email);
    return userSuspendedEmail.data[0]
  } catch (error) {
    return error;
  }
};
