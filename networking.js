// Imports
import axios from 'axios'

// API key
const API_KEY = "JSRUKTOXTRCFBOL1K0ZFC"; // Get your API key here: https://app.rytr.me/account/api-access

// API URL
const API_URL = "https://api.rytr.me/v1";


// Tone list
async function toneList() {
  try {
    const { data } = await axios({
      method: "get",
      url: `${API_URL}/tones`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return data ? data.data : null;
  } catch (error) {
    console.log(error);
  }

  return null;
}

// Get tones
async () => {
  const tones = await toneList();
  console.log("tones", tones);
}
  
