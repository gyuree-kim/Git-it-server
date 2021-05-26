const express = require('express');
const router = express.Router();

// api list
router.get("/", function (req, res, next) {
  res.render("list", {
    title: "api list",
    apilist: [
      // user
      {
        name: `${req.headers.host}/api/user`,
        description: "create a new user",
        method: "post",
      },
      {
        name: `${req.headers.host}/api/user`,
        description: "get all users",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/user/:username`,
        description: "get a user by username",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/user/friends/:username`,
        description: "get friends by username",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/user/:username`,
        description: "update user by username",
        method: "put",
      },
      {
        name: `${req.headers.host}/api/user/:username`,
        description: "delete a user by username",
        method: "delete",
      },
      //commits
      {
        name: `${req.headers.host}/api/commits/user/:username`,
        description: "get commits by username",
        method: "get",
      },
      {
        name: `${req.headers.host}/api/commits/friends/:username`,
        description: "get friends' commits by username",
        method: "get",
      }
    ],
  });
});

module.exports = router;