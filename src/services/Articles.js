import axios from "axios";

const getArticles = async (toshow) => {
  let response;
  if (toshow !== "Todos") {
    response = await axios.get(
      `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${toshow}`
    );
  } else {
    response = await axios.get(
      "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles"
    );
  }
  return response.data;
};

const postArticles = async (values) => {
  const request = await axios.post(
    "https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter",
    values
  );
  return request;
};

export { getArticles, postArticles };
