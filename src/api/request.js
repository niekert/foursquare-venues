import queryString from 'query-string';

const API_BASE_URL = 'https://api.foursquare.com/v2';

const FOURSQUARE_CLIENT_ID = process.env.REACT_APP_FS_CLIENT_ID;
const FOURSUQARE_CLIENT_SECRET = process.env.REACT_APP_FS_CLIENT_SECRET;
const FOURSQUARE_VERSION = '20171101'; // See https://developer.foursquare.com/docs/api/configuration/versioning#the-v-parameter
const FOURSQUARE_RESPONSE_TYPE = 'foursquare';

export const apiRequest = async (path, requestOptions) => {
  const requestQueryString = queryString.stringify({
    client_id: FOURSQUARE_CLIENT_ID,
    client_secret: FOURSUQARE_CLIENT_SECRET,
    v: FOURSQUARE_VERSION,
    m: FOURSQUARE_RESPONSE_TYPE,
    ...requestOptions,
  });

  return fetch(`${API_BASE_URL}${path}?${requestQueryString}`).then(resp =>
    resp.json(),
  );
};
