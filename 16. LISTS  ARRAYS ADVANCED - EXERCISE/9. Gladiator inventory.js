function solve(input) {
    let equipment = input
        .shift()
        .split(' ');
    for (let commands of input) {
        let currentCommand = commands.split(' ');
        let action = currentCommand[0];

        if (action === 'Buy') {
            let item = currentCommand[1];
            buyItems(item);
        } else if (action === 'Trash') {
            let item = currentCommand[1];
            trashItem(item);
        } else if (action === 'Repair') {
            let item = currentCommand[1];
            repairItem(item)
        } else if (action === 'Upgrade') {
            let [item, upgrade] = currentCommand[1].split('-');
            upgradeItem(item, upgrade);
        }
    }


    function buyItems(item) {
        let index = equipment.indexOf(item);
        if (index === -1) {
            equipment.push(item);
        }
    }

    function trashItem(item) {
        let index = equipment.indexOf(item);
        if (index !== -1) {
            equipment.splice(index, 1);
        }
    }
    function repairItem(item) {
        let index = equipment.indexOf(item);
        if (index !== -1) {
            equipment.splice(index, 1);
            equipment.push(item);
        }
    }

    function upgradeItem(item, upgrade) {
        let index = equipment.indexOf(item) ;
        if (index !== -1) {
            let upgradedItem = `${item}:${upgrade}`;
            equipment.splice(index+1, 0, upgradedItem);
        }
    }




    console.log(equipment.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);

/*Moe reshenie 100/100
function solve(input) {
    let equipment = input
        .shift()
        .split(' ');
    for (let commands of input) {
        let currentCommand = commands.split(' ');
        let action = currentCommand[0];
        switch (action) {
            case 'Buy':
                let boughtItem = currentCommand[1];
                if (!equipment.includes(boughtItem)) {
                    equipment.push(boughtItem);
                }

                break;
            case 'Trash':
                let trashedItem = currentCommand[1];
                if (equipment.includes(trashedItem)) {
                    let index = equipment.indexOf(trashedItem);
                    equipment.splice(index, 1);
                }
                

                break;
            case 'Repair':
                let repairedItem = currentCommand[1];
                if (equipment.includes(repairedItem)) {
                    let index = equipment.indexOf(repairedItem);
                    equipment.splice(index, 1);
                    equipment.push(repairedItem);
                }


                break;
            case 'Upgrade':
               let upgrades=currentCommand[1].split('-');
               let upgradedItem = upgrades[0];
                if (equipment.includes(upgradedItem)) {
                    let index = equipment.indexOf(upgradedItem);
                    let upgradeToAdd=upgradedItem+':'+upgrades[1];
                    equipment.splice(index+1, 0, upgradeToAdd);
                }
                break;
        }
    }
    console.log(equipment.join(' '));
}
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']


)
*/