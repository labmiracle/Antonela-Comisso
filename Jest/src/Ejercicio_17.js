//Data
const users = [
    {
        login: 'knuth',
        firstName: 'Donald',
        lastName: 'Knuth',
        likes: ['C', 'Unix'],
    },
    {
        login: 'norvig',
        firstName: 'Peter',
        lastName: 'Norvig',
        likes: ['AI', 'Search', 'NASA', 'Mars'],
    },
    {
        login: 'mfowler',
        firstName: 'Martin',
        lastName: 'Fowler',
        likes: ['Design Patterns', 'Refactoring'],
    },
    {
        login: 'kent',
        firstName: 'Kent',
        lastName: 'Beck',
        likes: ['TDD', 'wikis', 'Design Patterns'],
    },
];


// lookup()
function lookup(login, property) {

    for (let i = 0; i < users.length; i += 1) {
        if (users[i].login == login) {

            switch (property) {
                case "firstName":
                    return users[i].firstName;
                    break;

                case "lastName":
                    return users[i].lastName;
                    break;

                case "likes":
                    return users[i].likes;
                    break;
                default:
                    throw Error('/Could not find property/');


            };

        };


    }
    throw Error('/Could not find user/')
};

lookup('mfowler', 'noprop')
module.exports = { lookup };