import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import { DATA_ERROR, GET_DATA, HOST, BOARD_ADD, ADD_TASK } from "./types";

// Load User
export const getData = (user_id, member, label) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      `${HOST}/search/${user_id}?query=&member=${member}&label=${label}`
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};

export const addBoard = (name) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name });

    const res = await axios.post(`${HOST}/add-board`, body, config);
    dispatch({
      type: BOARD_ADD,
      //   payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};

export const addTask = (list_id, title, description) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ list_id, title, description });

    const res = await axios.post(`${HOST}/add-task`, body, config);
    dispatch({
      type: ADD_TASK,
      //   payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};

export const updateTask = (id, title, description) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ id, title, description });

    const res = await axios.post(`${HOST}/update-task`, body, config);
    dispatch({
      type: ADD_TASK,
      //   payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};

export const assignUser = (id, member_id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ id, member_id });

    const res = await axios.post(`${HOST}/assign-task`, body, config);
    dispatch({
      type: ADD_TASK,
      //   payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};

export const updateLabel = (id, label_id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ id, label_id });

    const res = await axios.post(`${HOST}/add-label-task`, body, config);
    dispatch({
      type: ADD_TASK,
      //   payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DATA_ERROR,
    });
  }
};
