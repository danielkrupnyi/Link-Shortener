import { HTTP_URL_VALIDATOR_REGEX } from "../constants";

const validate = (string: string) => string.match(HTTP_URL_VALIDATOR_REGEX);

export default validate;
