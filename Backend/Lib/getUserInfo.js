function getUserInfo(user) {
    return {
        name: user.name,
        email: user.email,
    };
}

module.exports = getUserInfo;
