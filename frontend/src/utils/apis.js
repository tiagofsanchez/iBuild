import axios from 'axios'; 

const convertkit_api_key = process.env.GATSBY_CONVERTKIT_API_KEY;
const convertkit_form = process.env.GATSBY_CONVERTKIT_FORM;

//convertKit
export const addEmailToConvertKit = (name, email) => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = `https://api.convertkit.com/v3/forms/${convertkit_form}/subscribe`;
  const data = {
    api_key: convertkit_api_key,
    email: email,
    first_name: name,
    tags: "Frameworks",
  };
  axios
    .post(url, data, axiosConfig)
    .then(() => console.log("Email received in convertkit"))
    .catch((error) => console.log(error));
};
