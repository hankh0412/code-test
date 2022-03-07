let wantedGenres = ['로맨스', '판타지'];
let genres = [];

async function findOne(obj){
    for(let i=0; i<1000000; i++){
    }
    return obj;
}

async function main() {
    const promises = wantedGenres.map(async (value, index) => {
        const g = await findOne({ name: value });
        genres.push(g);
        console.log(`Push ${index}: ${JSON.stringify(genres)}`);
    });
    await Promise.all(promises);
    console.log(`Done: ` + JSON.stringify(genres));
}

main();