import { getAll } from '@vercel/edge-config';

export default async (req, res) => {
  try {
    // Retrieve all keys from Edge Config
    const keysData = await getAll();
  
    if (!keysData) {
      return res.status(500).json({ error: 'Failed To Fetch Data' });
    }

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Client IP Address: ${ip}`);
    
    // Extract the key to be checked from the request
    const { key } = req.query;

    if (!key) {
      return res.status(200).json({ message: 'No Key Entered' });
    }

    // Find the key in the retrieved data
    const foundKey = keysData.keys.find((item) => item.key === key);

    if (foundKey) {
      // Key is found, return the associated hwid
      console.log("Key Used:", key);
      return res.status(200).json({ hwid: foundKey.hwid });
    } else {
      // Key not found
      console.log("Key Not Found:", key);
      return res.status(200).json({ message: 'Key Not Found' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
