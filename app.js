new Vue({
    el: "#app",
    data: {
        playerLife: 0,
        monsterLife: 0,
        logs: []
    },
    methods: {
        startNew: function () {
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack: function (special, heal) {
            if (this.playerLife > 0 && this.monsterLife > 0) {
                var playerAttack;
                if (special) {
                    playerAttack = Math.floor(Math.random() * 20) + 1;
                }
                else if (heal) {
                    playerAttack = 0;
                    this.playerLife += 15;
                    if (this.playerLife > 100) {
                        this.playerLife = 100;
                    }
                }
                else {
                    playerAttack = Math.floor(Math.random() * 10) + 1;
                }
                var monsterAttack = Math.floor(Math.random() * 10) + 1;
                if (playerAttack === 0 && !heal) {
                    playerAttack += 1;
                }
                if (monsterAttack === 0) {
                    monsterAttack += 1;
                }
                this.logs.push({ pAtk: playerAttack, mAtk: monsterAttack })
                this.playerLife -= monsterAttack;
                this.monsterLife -= playerAttack;
                if (this.playerLife <= 0 && this.monsterLife <= 0) {
                    if (this.playerLife > this.monsterLife) {
                        this.playerLife += (0 - this.monsterLife);
                        this.monsterLife = 0;
                        alert('You Won!!');
                    } else {
                        this.monsterLife += (0 - this.playerLife);
                        this.playerLife = 0;
                        alert('Game Over!');
                    }
                }
                else if (this.playerLife <= 0 || this.monsterLife <= 0) {
                    if (this.playerLife <= 0) {
                        alert('GAME OVER!');
                        this.playerLife = 0;
                    } else if (this.monsterLife <= 0) {
                        alert('YOU WON!!');
                        this.monsterLife = 0;
                    }
                }
            }
        },
        specialAttack: function () {
            this.attack(true);
        },
        heal: function () {
            this.attack(false, true);
        },
        giveUp: function () {
            this.playerLife = 0;
            this.monsterLife = 0;
            this.logs = [];
        }
    },
    watch: {
        logs: function (newLog) {

        }
    }
})