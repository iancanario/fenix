function status(req, res) {
  res.status(200).json({ message: "API está funcionando corretamente!" });
}

export default status;
