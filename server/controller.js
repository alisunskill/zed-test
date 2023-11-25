// updatedController.js
const UpdatedData = require("./model");

// create data
exports.storeData = async (req, res) => {
  try {
    const { name, age, gender, architecture, profession, agreeToTerms } =
      req.body;
    const newData = new UpdatedData({
      name,
      age,
      gender,
      architecture,
      profession,
      agreeToTerms,
    });
    await newData.save();
    console.log(newData, 'data');
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// edit data
exports.editData = async (req, res) => {
  try {
    const { name, age, gender, architecture, profession, agreeToTerms } =
      req.body;
    const userId = req.params.id;
    const updatedData = await UpdatedData.findOneAndUpdate(
      { _id: userId },
      { name, age, gender, architecture, profession, agreeToTerms },
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
        // res.status(200).json({"hey": "okay"});

    const allData = await UpdatedData.findOne();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get data
exports.getData = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await UpdatedData.findById(userId);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete data
exports.deleteData = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedData = await UpdatedData.findByIdAndDelete(userId);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
