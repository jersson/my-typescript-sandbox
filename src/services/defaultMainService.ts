import MainService from "../interfaces/mainService";

export default class DefaultMainService implements MainService {
  constructor() {}

  getMessage = () => {
    return { statusMessage: "Express server is running..." };
  };
}
