let wantedGenres = ['로맨스', '판타지'];
let genres = [];

async function findOne(obj){
    for(let i=0; i<1000000; i++){
    }
    return obj;
}

async function main() {
    wantedGenres.forEach(async (value, index) => {
        const g = await findOne({ name: value });
        genres.push(g);
        console.log(`Push ${index}: ${JSON.stringify(genres)}`);
    });
    
    console.log(`Done: ` + genres);
}

main();

// wantedGenres = ['로맨스', '판타지']

// 예상 결과
// Push 0: [{...name: '로맨스'...}]
// Push 1: [{...name: '로맨스'...}, {...name: '판타지'...}]
// Done: [{...name: '로맨스'...}, {...name: '판타지'...}]


// 실행 결과
// Done:
// Push 0: [{...name: '로맨스'...}]
// Push 1: [{...name: '로맨스'...}, {...name: '판타지'...}]