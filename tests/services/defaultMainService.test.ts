import DefaultMainService from "@/services/defaultMainService";

describe("defaultMainService", () => {
  test("[OK] getMessage works properly", () => {
    const mainService = new DefaultMainService();
    const message = mainService.getMessage();

    expect(message).toEqual({ statusMessage: "Express server is running..." });
  });
});
