const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jacob',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Andrew',
            room: 'Node Course'
        }, {
            id: '3',
            name: 'Jen',
            room: 'React Course'
        }]
    });
    it('should add new user', () => {
        // var users = new Users();
        // var user = {
        //     id: '123',
        //     name: 'Jacob',
        //     room: 'NodeJS'
        // }
        // var resUser = users.addUser(user.id, user.age, user.room);

        // expect(users.users).toEqual([user]);
    })

    it('should remove a user ', () => {
        var userId = '2';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user ', () => {
        var userId = '5';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user ', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user ', () => {
        var userId = '5';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return maes for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Jacob','Andrew']);
    });

    it('should return maes for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
})