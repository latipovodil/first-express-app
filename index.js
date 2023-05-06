const Express = require("express");
const users = require("./users.json");
const fs = require("fs");
const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/register", (req, res) => {
  if (users.length == 0) {
    fs.writeFile(
      "users.json",
      JSON.stringify([...users, req.body], null, 4),
      (err) => {
        console.log(err ? err : "Write file");
      }
    );
    res.json({ message: "User register" });
    return;
  }

  users.map((el) => {
    if (el.name == body.name) {
      res.json({ error: true, message: "user mavjud" });
    } else {
      fs.writeFile(
        "users.json",
        JSON.stringify([...users, req.body]),
        (err) => {
          console.log(err ? err : "Write file");
        }
      );
      res.json({ message: "User register" });
    }
  });
});

app.post("/edit", (req, res) => {
  if (users.length == 0) {
    res.json({ message: "Users don't" });
    return;
  }

  users.map((el) => {
    if (el.name == req.body.name) {
      if (req.body.password == el.password) {
        fs.writeFile(
          "users.json",
          JSON.stringify(
            users.filter((el) =>
              el.name == req.body.name ? (el.name = req.body.newname) : ""
            ),
            null,
            4
          ),
          (err) => {
            console.log(err ? err : "Write file");
          }
        );

        res.json({ error: false, message: "User data update" });
      } else {
        res.json({ error: true, message: "Parol xato" });
      }
    } else {
      res.json({ error: true, message: "User name don't" });
    }
  });
});

app.post("/delete", (req, res) => {
if(users.length == 0){
  res.json({ error: true, message: "users don't" });
}


users.map((el) => {
  if (el.name == req.body.name) {
    if (req.body.password == el.password) {
      fs.writeFile(
        "users.json",
        JSON.stringify(
          users.filter((el) =>
            el.name == req.body.name ? null : el
          ),
          null,
          4
        ),
        (err) => {
          console.log(err ? err : "Write file");
        }
      );

      res.json({ error: false, message: "Delete data" });
    } else {
      res.json({ error: true, message: "Parol xato" });
    }
  } else {
    res.json({ error: true, message: "User name don't" });
  }
});



});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
