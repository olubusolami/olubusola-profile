exports.bioDetails = {
  slackUsername: "Olúbùsọ́lá",
  backend: true,
  age: 26,
  bio: "Olúbùsọ́lá Odunuga is a highly motivated young woman from Ogun state whose recent drive is to challenge herself daily by sharpening her skills that will help her perform better. She is graduate of Microbiology from Olabisi and currently a backend developer intern at HNG9. Her new found craving is for cartoons.",
};

exports.hngtask = function (req, res) {
  const { x, y, operation_type } = req.body;
  const operation_types = ["addition", "subtraction", "multiplication"];
  if (!operation_types.includes(operation_type)) {
    return res
      .status(400)
      .json({ message: "Invalid operation type provided." });
  }
  let result;
  switch (operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
    default:
      break;
  }

  if (!result) {
    return res
      .status(400)
      .json({ message: "Can't proceed with request because input is empty." });
  } else {
    return res
      .status(200)
      .json({ SlackName: "Olúbùsọ́lá", operation_type, result });
  }
};
