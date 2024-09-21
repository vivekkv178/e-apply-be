const createError = require("http-errors");
const sendEmail = require("../../../utils/node-mailer.service");

module.exports = async (req, res, next) => {
  const { body } = req;
  try {
    for (const row of body?.rowData) {
      const info = await sendEmail(row);
    }

    res.send("Success");
  } catch (error) {
    console.log(error);
    next(createError(500));
  }
};
