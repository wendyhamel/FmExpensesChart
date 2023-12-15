window.balance = function() {
	return {
		spendingPerDay: [
			{
				"day": "mon",
				"amount": 17.45,
				"today": false,
				"height": 0,
			},
			{
				"day": "tue",
				"amount": 34.91,
				"today": false,
				"height": 0,
			},
			{
				"day": "wed",
				"amount": 52.36,
				"today": false,
				"height": 0,
			},
			{
				"day": "thu",
				"amount": 31.07,
				"today": false,
				"height": 0,
			},
			{
				"day": "fri",
				"amount": 23.39,
				"today": false,
				"height": 0,
			},
			{
				"day": "sat",
				"amount": 43.28,
				"today": false,
				"height": 0,
			},
			{
				"day": "sun",
				"amount": 25.48,
				"today": false,
				"height": 0,
			}
		],
		init() {
			let today = new Date();
			this.spendingPerDay[today.getDay()-1].today = true
			this.maximum = Math.max(...this.spendingPerDay.map(spending => spending.amount))
			this.spendingPerDay.forEach((spending) => spending.height = 'h-['+ Math.round((100 / this.maximum) * spending.amount) + '%]')
		}
	}
}