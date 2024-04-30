const exxpress = require("express");
const userschema = require("../models/user");

const router = exxpress.Router();

//crear usuario
router.post('/users', (req, res) => {
  const user = userschema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({ mensaje: error }));
});

router.get("/users", (req, res) => {
  userschema

    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userschema

   .findById(id)
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }));
  });

router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, dni, email, domicilio} = req.body;
  userschema

    .updateOne({ _id: id }, { $set: {nombre, dni, email, domicilio} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  });

  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userschema

      .deleteOne({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;