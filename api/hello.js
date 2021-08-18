const handler = (req, res) => {
  console.log(req.url);
  console.log(req.query.name);
  const personToGreet = req.query.name || "Stranger!";
  res.json({
    name: personToGreet.charAt(0).toUpperCase() + personToGreet.slice(1)
  });
};

export default handler;
