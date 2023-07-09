export default async function getNewsData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.cbc.ca%2Flineup%2Ftopstories.xml"
  );

  if (!res.ok) throw new Error("Fail to fetch data");

  return res.json();
}
