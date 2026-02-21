exports.login = async (req, res) => {
    try {
        const token  = await authService.login(req.body);
        res.json({ token });
    } catch (error) {  
        res.status(401).json({ message: error.message });
    }
};