var questions = [
	{
		question: "What is our son Issa's Middle Name",
		answer: "Yassine"
	},
	{
		question: "What city was Issa born in",
		answer: "Richmond"
	},
	{
		question: "What was hospital was he born in?",
		answer: "General Hospital"
	},
	{
		question: "Who named our son",
		answer: "Edd"
	},
	{
		question: "Who is Issa's youngest uncle/aunty",
		answer: "Aya"
	},
	{
		question: "What does Issa's name mean",
		answer: "Jesus"
	},
	{
		question: "How many hours was Issa's labor",
		answer: 24
	}
];

for(var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var el = document.getElementById('question' + [i]);

	console.log(question, el);

	el.textContent = question;
}

function getResults() {

	var correct = 0;
	var incorrect = 0;

	for(var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var guess = document.getElementById('answer' + [i]).value;
		var questionSpot = document.getElementById('question' + [i]);

		if(answer == guess) {
			questionSpot.className = 'correct';
			correct++;
		} else {
			questionSpot.className = 'incorrect';
			incorrect++;
		};
	};

	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
