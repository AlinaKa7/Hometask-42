const array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
    const list = document.createElement('ul');

    array.forEach(function(item) {
        const listItem = document.createElement('li');

        if (Array.isArray(item)) {
            const sublist = generateList(item);
            listItem.appendChild(sublist);
        } else {
            listItem.innerText = item;
        }
        list.appendChild(listItem);
    })
    return list;
}

document.body.appendChild(generateList(array));