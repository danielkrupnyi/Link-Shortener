import React from "react";
import api from "../api/API";
import { addShort } from "../store/shortsSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { observeInputText } from "../store/inputTextSlice";
import { changeLoadingStatus, stopLoading } from "../store/loadingSlice";
import { catchError, clearError } from "../store/errorSlice";
import validate from "../utils/validate";
import {
  Button,
  FormControl,
  TextField,
  LinearProgress,
} from "@material-ui/core";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading: boolean = useAppSelector((state) => state.loading.value);
  const error: boolean = useAppSelector((state) => state.error.value);
  const inputText: string = useAppSelector((state) => state.inputText.value);

  const submitHandler = (
    e:
      | React.FormEvent<HTMLDivElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (validate(inputText)) {
      getLink(inputText);
      dispatch(observeInputText(""));
      dispatch(changeLoadingStatus());
    } else {
      dispatch(catchError());
    }
  };

  const getLink = async (text: string) => {
    dispatch(clearError());
    await api
      .get(`shorten?url=${text}`)
      .then((res) => {
        dispatch(clearError());
        dispatch(addShort(res.data.result.full_short_link));
        dispatch(stopLoading());
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(catchError());
        console.log(err);
      });
  };

  const observeInput = (e: { target: { value: string } }) => {
    dispatch(observeInputText(e.target.value));
  };

  return (
    <FormControl onSubmit={(e) => submitHandler(e)} className="form">
      <TextField
        className="form-input"
        error={error}
        required
        style={{ marginBottom: "15px" }}
        label="Input Your Link"
        variant="outlined"
        value={inputText}
        helperText={error && "Pass a valid link."}
        onChange={(e) => observeInput(e)}
      />
      {!loading && (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </Button>
      )}
      {loading && <LinearProgress />}
    </FormControl>
  );
};

export default Form;
