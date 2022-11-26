      // Damage System === (monster base power) + (base power / 2) * (arealevel)
      
      // ----------MONSTER----------
      if (monsterName === "slime") {
        // monster --> Slime
        monsterImage.src = "Photos/monster-images/monster-slime.png";
        itemImage.src = "Photos/items/slime-sword.png";
        monsterTypeDamage = 50 + 25 * level;
        monsterExp = 30 + 12 * level * 2;
      } else if (monsterName === "skeleton") {
        //monster --> Skeleton
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-skeleton-image.png";
        monsterInfoName.innerHTML = "Skeleton";
        monsterImage.src = "Photos/monster-images/skeleton-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "320px";
        monsterImage.style.width = "250px";
        monsterTypeDamage = 55 + 28 * level * 2;
        monsterExp = 35 + 18 * level * 2;
      } else if (monsterName === "vampire") {
        // monster --> Vampire
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-vampire-image.png";
        monsterInfoName.innerHTML = "Vampire";
        monsterImage.src = "Photos/monster-images/vampire-image.png";
        itemImage.src = "Photos/items/vampire-sword.png";
        monsterImage.style.height = "420px";
        monsterImage.style.width = "320px";
        monsterImageMargin.style.marginRight = "20px";
        monsterTypeDamage = 65 + 33 * level * 2;
        monsterExp = 50 + 25 * level * 2;
      } else if (monsterName === "dragon") {
        // monster --> Dragon
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-dragon-image.png";
        monsterInfoName.innerHTML = "Dragon";
        monsterImage.src = "Photos/monster-images/dragon-image.png";
        itemImage.src = "Photos/items/dragon-sword.png";
        monsterImage.style.height = "448px";
        monsterImage.style.width = "400px";
        attackContainer.style.width = "260px";
        championDamageDisplay.style.left = "680px";
        championDamageDisplay.style.top = "80px";
        monsterDamageDisplay.style.right = "840px";
        monsterDamageDisplay.style.top = "80px";
        monsterImageMargin.style.marginRight = "0";
        monsterSide.style.gap = "0";
        monsterTypeDamage = 75 + 38 * level * 2;
        monsterExp = 60 + 30 * level * 2;
      }
      else if (monsterName === "minatour") {
        //monster --> Minatour
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-minatour-image.png";
        monsterInfoName.innerHTML = "Minatour";
        monsterImage.src = "Photos/monster-images/minatour-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "370px";
        monsterImage.style.width = "320px";
        monsterTypeDamage = 60 + 30 * level * 2;
        monsterExp = 40 + 20 * level * 2;
      }
      else if (monsterName === "orc") {
        //monster --> Orc
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-orc-image.png";
        monsterInfoName.innerHTML = "Orc";
        monsterImage.src = "Photos/monster-images/orc-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "380px";
        monsterImage.style.width = "290px";
        monsterTypeDamage = 70 + 35 * level * 2;
        monsterExp = 55 + 30 * level * 2;
      }
      else if (monsterName === "spider") {
        //monster --> Spider
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-spider-image.png";
        monsterInfoName.innerHTML = "Spider";
        monsterImage.src = "Photos/monster-images/spider-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "200px";
        monsterImage.style.width = "250px";
        monsterTypeDamage = 45 + 22 * level * 2;
        monsterExp = 35 + 20 * level * 2;
      }
      else if (monsterName === "wolf") {
        //monster --> Wolf
        monsterInfoImage.src =
          "Photos/small-img/small-monster-images/small-wolf-image.png";
        monsterInfoName.innerHTML = "Wolf";
        monsterImage.src = "Photos/monster-images/wolf-image.png";
        itemImage.src = "Photos/items/skeleton-sword.png";
        monsterImage.style.height = "260px";
        monsterImage.style.width = "240px";
        monsterTypeDamage = 55 + 30 * level * 2;
        monsterExp = 35 + 22 * level * 2;
      }
      
      // ----------MAPS----------
      if (mapName === "forest") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/forest-background.jpg")`;
      } else if (mapName === "ice-cave") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/ice-cave-background.jpg")`;
      } else if (mapName === "space") {
              containerArea.style.backgroundImage = `url("Photos/area-backgrounds/space-background.jpg")`;
      } else if (mapName === "empty") {
      containerArea.style.backgroundImage = `url("Photos/area-backgrounds/empty-background.png")`;
      }