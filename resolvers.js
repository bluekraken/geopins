const user = {
  _id: "1",
  name: "Andrew",
  email: "andy.hearse@gmail.com",
  picture: "https://cloudinary.com/abcdef"
};

module.exports = {
  Query: {
    me: () => user
  }
};
