import User from '../../models/user.js';

const createUser = async(req, res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: 'Created successfully',
            data: user,
            error: false,
        });
    }
    catch(error){
        res.status(400).json({
            error: error.message
        });
    }
};


const getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        res.status(200).json({
            message: 'Fetched successfully',
            data: users,
            error: false,
        });
    }
    catch(error){
        res.status(400).json({
            error: error.message,
       });
    }
};

const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          error: true,
        });
      }
      res.status(200).json({
        message: 'Fetched successfully',
        data: user,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  };

  
const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          error: true,
        });
      }
      res.status(200).json({
        message: 'Updated successfully',
        data: user,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
          error: true,
        });
      }
      res.status(200).json({
        message: 'Deleted successfully',
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  };

export { getUsers, getUserById, createUser, updateUser, deleteUser };