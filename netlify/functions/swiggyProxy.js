// netlify/functions/swiggyProxy.js
import { Swiggy_API } from "../../src/utils/constants";
const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(Swiggy_API);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
