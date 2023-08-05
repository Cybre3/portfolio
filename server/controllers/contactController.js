module.exports = {
  post: {
    sendMessage: async (req, res) => {
      let { name, email, message } = req.body;

      if (name.length === 0 || email.length === 0 || message.length === 0) {
       return res.json({ msg: 'Please fill out the fields' });
      }

      try {
        res.status(200).json({ msg: 'Your developer will reach out to you shortly!' });
      } catch (error) {
        if (error) return res.status(500).json({ msg: 'There is server error' });
      }
    },
  },
};
