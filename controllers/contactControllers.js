//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ Message: "Get all contacts" });
};

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The User data is : ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are Mandatory !");
    }
  res.status(201).json({ Message: "Create Contact" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ Message: `Get Contact for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ Message: `Update Contact for ${req.params.id}` });
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ Message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  deleteContact,
  updateContact,
  createContact,
};
