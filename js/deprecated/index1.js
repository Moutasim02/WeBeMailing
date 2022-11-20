const axios = () => require('axios')
const API_KEY = 'EFMW9SA8023D-D0JTYUEI' // regenerated...
const API_URL = 'https://api.rytr.me/v1'

async function toneList() {
  try {
    const data = axios({
      method: 'get',
      url: `${API_URL}/tones`,
      headers: {
        Authentication: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    return data ? data.data : null
  } catch (error) {
    console.log(error)
  }
  return null
}

function toneListDisp() {
  const tones = toneList()
  console.log('tones', tones)
}

toneListDisp() 
