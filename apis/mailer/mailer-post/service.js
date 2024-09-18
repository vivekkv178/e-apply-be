const createError = require("http-errors");
const sendEmail = require("../../../utils/node-mailer.service");

module.exports = async (req, res, next) => {
  const { body } = req;
  try {
    const info = await sendEmail();

    res.send(info);
  } catch (error) {
    console.log(error);
    next(createError(500));
  }
};
