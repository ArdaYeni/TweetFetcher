const baseId = process.env.REACT_APP_AIRTABLE_BASE_ID;
const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

const tableName = 'Tweets'; // <-- must match the name of the table as it appears in Airtable UI

export async function sendToAirtable(fields) {
    console.log('Sending to Airtable:', fields);

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  const data = await res.json();
  console.log('Airtable Response:', data);
}