const users = {
    1:{
        username:'jhon',
        name: 'Jhon Doe',
        email: "jhondoe@gmail.com",
    },
    2:{
        username:'jane',
        name: 'Jane Doe',
        email: "janedoe@gmail.com",
    },
};



const getUsers = (req, res) => {
    res.status(200).json({
        status: 'succes',
        data: users,
    });
};

export { getUsers };