// place files you want to import through the `$lib` alias in this folder.
/**
 * @type {import("$lib/types").EventPost[]}
 */
export const exampleEvents = [
    {
        id: '1',
        title: 'Example Academic Event',
        description: 'This is an example academic event',
        date: '2021-10-01',
        time: '10:00',
        location: 'ENGMC 12',
        image: 'https://picsum.photos/1000',
        link: 'https://www.google.com',
        category: 'category 1',
        payment: 'https://www.google.com'
    },
    {
        id: '2',
        title: 'Example Technical Workshop',
        description: 'This is an example technical workshop',
        date: '2021-10-02',
        time: '8PM',
        location: 'ENGTR 2010',
        image: 'https://picsum.photos/1000',
        link: 'https://www.google.com',
        category: 'category 2',
        payment: 'https://www.google.com'
    },
]