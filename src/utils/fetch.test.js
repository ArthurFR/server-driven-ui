import fetchMock from "jest-fetch-mock";
import fetchAsync from "./fetch.js";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("calls fetch and return response", async () => {
  fetch.mockResponseOnce(JSON.stringify({ type: 'container' }));
  const url = 'http://localhost:8080';
  const fetchAsyncResponse = await fetchAsync(url);

  expect(fetchAsyncResponse).toEqual({ type: 'container' });
  expect(fetch).toHaveBeenCalledWith(url);
});