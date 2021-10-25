import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTc5MmU5MWU2OWJiODdlMTNhZTA3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDcwNTc2OCwiZXhwIjoxNjM0OTY0OTY4fQ.47L_j4ZU7prW3J68l7XUeZpMgui6njmIllD84fSw1IM";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: TOKEN },
});
