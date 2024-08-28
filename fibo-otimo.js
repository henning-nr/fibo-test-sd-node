const readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
});

const memo = {};

function optimizedFibonacci(n) {
		if (memo.hasOwnProperty(n)) {
				return memo[n];
		}

		let result;
		if (n <= 1) {
				result = n;
		} else {
				result = optimizedFibonacci(n - 1) + optimizedFibonacci(n - 2);
		}

		memo[n] = result;
		return result;
}

function processInput(input) {
		if (input.toLowerCase() === 'x') {
				console.log("Encerrando a execução.");
				rl.close();
				return;
		}

		try {
				const n = parseInt(input);
				const startTime = new Date().getTime();
				const lastTerm = optimizedFibonacci(n - 1);
				const endTime = new Date().getTime();
				const elapsedTime = endTime - startTime;

				console.log('Tempo de execução:', elapsedTime, 'ms');
				console.log('Último termo encontrado na sequência:', lastTerm);
		} catch (error) {
				console.log("Por favor, insira um número válido ou 'x' para sair.");
		}

		rl.question('Digite o número de termos da sequência Fibonacci (ou "x" para sair): ', processInput);
}

rl.question('Digite o número de termos da sequência Fibonacci (ou "x" para sair): ', processInput);
