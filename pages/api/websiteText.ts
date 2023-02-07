export default async function latestSites(req: any, res: any) {
    const body = req.url;
  
    try {
      const siteText = await fetch(`https://www.w3.org/services/html2txt?url=https%3A%2F%2F${body.url}%2F&noinlinerefs=on&nonums=on`)
        .then(response => response.text())
        .then(text => text.replace(/(\r\n|\n|\r)/gm, ""))
        .then(text => text.replace(/\s+/g, " "))
        .then(text => text.trim())
  
      res.status(200).send({ siteText });
    } catch (error) {
      console.error('Error fetching site text:', error);
      res.status(500).send({ error: 'Error fetching site text' });
    }
  }
  