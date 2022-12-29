const t="https://www.thecocktaildb.com/api/json/v1/";(async function(o){const c=`${t}/1/search.php?s=${o}`;try{const t=await fetch(c);return await t.json()}catch{console.log(error.message)}})("margarita").then((t=>console.log(t)));
//# sourceMappingURL=index.d9c85ff9.js.map
