$(document).ready(function () {


	// add message to .main div
	const addMsg = (arr)=>{
		$('.main').empty();
		arr.forEach((e)=>{
			let apnd;
			apnd = '<div class="msg">';
			apnd += '<img class="image" src='+e.image+'>';
			apnd += '<span class="name">'+e.name+'</span>';
			apnd += '</br>'
			apnd += '<span class="date">'+e.date+'</span>';
			apnd += '<p class="msgTxt">'+e.msg+'</p>';
			apnd += '</div>'
			$('.main').append(apnd);
		});
	}


	// push the last messsage up
	const ticker = ()=>{
		$allMsg = $('.msg');
		$lastMsg = $allMsg.last();
		$lastMsg.fadeOut(()=>{
			$allMsg.parent().prepend($lastMsg);
			$lastMsg.fadeIn();
		});
	}


	// add message to the array
	$('button').click(()=>{
		let usrMsg = $('#usrMsg').val();
		arr.push({
			name: 'owen mitchell',
			date: '23/1/2012 18:33',
			image: 'img/owen_mitchell.jpg',
			msg: usrMsg
		});
		addMsg(arr);
	});


	// array of 10 messages
	const arr = [
		{
			name: 'Bruce_Brewer',
			date: '23/1/2012 18:33',
			image: 'img/Bruce_Brewer.jpg',
			msg: '1 1 1 1 1 '
		},
		{
			name: 'Byron_Spencer',
			date: '23/1/2012 18:33',
			image: 'img/Byron_Spencer.jpg',
			msg: '2 2 2 2 2 '
		},
		{
			name: 'Carla_Campbell',
			date: '23/1/2012 18:33',
			image: 'img/Carla_Campbell.jpg',
			msg: '3 3 3 3 3 '
		},
		{
			name: 'Dawn_Miller',
			date: '23/1/2012 18:33',
			image: 'img/Dawn_Miller.jpg',
			msg: '4 4 4 4 4 '
		},
		{
			name: 'Eileen_Graves',
			date: '23/1/2012 18:33',
			image: 'img/Eileen_Graves.jpg',
			msg: '5 5 5 5 5 '
		},
		{
			name: 'Kyle_Ruiz',
			date: '23/1/2012 18:33',
			image: 'img/Kyle_Ruiz.jpg',
			msg: '6 6 6 6 6 '
		},
		{
			name: 'Leslie_Morales',
			date: '23/1/2012 18:33',
			image: 'img/Leslie_Morales.jpg',
			msg: '7 7 7 7 7 '
		},
		{
			name: 'Lily Barnett',
			date: '23/1/2012 18:33',
			image: 'img/Lily_Barnett.jpg',
			msg: '8 8 8 8 8 '
		},
		{
			name: 'Melissa_Shaw',
			date: '23/1/2012 18:33',
			image: 'img/Melissa_Shaw.jpg',
			msg: '9 9 9 9 9 '
		},
		{
			name: 'Miriam_Armstrong',
			date: '23/1/2012 18:33',
			image: 'img/Miriam_Armstrong.jpg',
			msg: '10 10 10 10 10 '
		}
	]; // end of arr


	addMsg(arr);
	setInterval(ticker,2000);


}); // end of $(document).ready
