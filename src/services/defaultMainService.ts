import MainService from "../interfaces/MainService";

export default class DefaultMainService implements MainService {
  constructor() {}

  getMessage = () => {
    return { statusMessage: "Express server is running..." };
  };
}
