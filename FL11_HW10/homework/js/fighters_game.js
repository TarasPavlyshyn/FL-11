
let Fighter = function (fighter) {
    const MAX_RAND = 101;
    const INTIAL_HP = fighter.hp;

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
        
        let random = Math.floor(Math.random() * MAX_RAND); 
    
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
        if (fighter.hp > INTIAL_HP) {
            fighter.hp = INTIAL_HP;
        }
    }
    }
}

function battle(attacking, defender) {
    if (attacking.getHealth() > 0 && defender.getHealth() > 0) {
        while (attacking.getHealth() > 0 && defender.getHealth() > 0) {
            attacking.attack(defender);
            let nextAtakinh = attacking;
            attacking = defender;
            defender = nextAtakinh;
        }
        if(attacking.getHealth() > 0 ) {
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

