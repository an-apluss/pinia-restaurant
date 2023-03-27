import { ref } from "vue";
const response = ref({});
const error = ref({});

async function makeRequest(url, type, body) {
  let requestOptions;
  if (body) {
    requestOptions = {
      method: `${type}`, // POST, etc
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
  }

  try {
    const request = await fetch(
      `http://127.0.0.1:5173/${url}`,
      requestOptions ? requestOptions : null
    );
    response.value = await request.json();
    return response;
  } catch (error) {
    return error;
  }
}

export default async function myFetch(type, body, url) {
  await makeRequest(type, body, url);
  return { response, error };
}
