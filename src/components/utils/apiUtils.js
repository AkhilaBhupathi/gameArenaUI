export const fetchData = async (
  url,
  params = {},
  method = "GET",
  body = {},
  headers = {
    "Content-Type": "application/json",
  }
) => {
  try {
    const options = {
      method,
      headers,
    };
    if (method !== "GET") {
      options.body = JSON.stringify(body);
    }
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`${url}?${queryParams}`, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `API Error: ${response.status} - ${response.statusText}. ${errorData.message}`
      );
    }

    const data =
      response.status !== 204 && response.status !== 201
        ? await response.json()
        : null;
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export default fetchData;
