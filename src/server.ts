import { serverHttp } from "./http";
import "./websocket";
const port = process.env.PORT || 3000;

serverHttp.listen(port, () => {
  console.log("Server is running on", port);
});
