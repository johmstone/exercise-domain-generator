let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function GenerateDomain(){
    pronoun.forEach(src => {
        adj.forEach(el => {
            noun.forEach(item => {
                console.log(src.concat(el.concat(item,".com")));
            });            
        });
    });
}

GenerateDomain();