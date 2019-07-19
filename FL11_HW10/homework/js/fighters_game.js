let forRandom = 101;
let Fighter = function (fighter) {

  return {
    getName() {
        return fighter.name;
    },
    getDamage() {
        return fighter.damage;
    },
    getAgility() {
        return fighter.agility;
    },
    getHealth() {
        return fighter.hp;
    },
    attack(enemy){
        let random = Math.floor(Math.random() * forRandom); 

        if (random > enemy.getAgility()) {
            console.log(`${fighter.name} make ${fighter.damage} damage to ${enemy.getName()}`)
            enemy.dealDamage(fighter.damage)
        } else {
            console.log(`${fighter.name } attack missed`)
        }
    },
    dealDamage (reduseHealth) {
        fighter.hp -= reduseHealth;

    },
    addWin () { 
        if('win' in fighter) {
            fighter.win += 1;
        } else {
            fighter.lose = 0;
            fighter.win = 0;
            fighter.win += 1;
        }

    },
    addLose() {
        if ('lose' in fighter) {
            fighter.lose +=1;
        } else {
            fighter.win = 0;
            fighter.lose = 0;
            fighter.lose +=1;
        }
    },
    logCombatHistory(){
        console.log(`${fighter.name} Wins: ${fighter.win} Lose: ${fighter.lose}`)
    },
    heal(hitPoints){
        fighter.hp += hitPoints;
    }
    }
}

function batte(attacking,defender){
    if (attacking.getHealth() > 0 && defender.getHealth() > 0){
        while (attacking.getHealth() > 0 && defender.getHealth() > 0){
            attacking.attack(defender);
            let freeValue = attacking;
            attacking = defender;
            defender = freeValue;
        }
        if(attacking.getHealth() > 0 ){
            attacking.addWin();
            defender.addLose();

        } else {
            defender.addWin();
            attacking.addLose();
        }
    
    } else if (attacking.getHealth() <= 0) {
    console.log(`${attacking.getName()} is dead`);
    } else {
    console.log(`${defender.getName()} is dead`);
    }
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25}); 
const myFighter2 = new Fighter({name: 'lil', damage: 30, hp: 95, agility: 29});

