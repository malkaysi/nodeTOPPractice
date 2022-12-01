var fs = require('fs/promises');

exports.readUrlFile = async function (url) {
  try {
    const data = await fs.readFile(`.${url}`, { encoding: 'utf8' });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
