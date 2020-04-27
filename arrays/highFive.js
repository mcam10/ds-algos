



const highFive = items => {
	
const scoreboard = {};

for(const [id, score] of items){
	if(scoreboard[id]){
		scoreboard[id].push(score)
	}
	else{
		scoreboard[id] = [score]
	}
}
	const getAverage = (res,student) => {
		const topFive = scoreboard[student]
		.sort((a,b)=>b-a)
		.reduce((total,curr,i)=> {
		   if(i < 5) total +=curr;
			return total;
		});
	res.push([student, Math.floor(topFive/5)])
	return res;
}

	return Object.keys(scoreboard).reduce(getAverage,[])

}

let input = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]

console.log(highFive(input))

module.exports = highFive;
