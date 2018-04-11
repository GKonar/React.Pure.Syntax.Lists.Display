	var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		image: 'https://i.ebayimg.com/images/g/Z54AAOSwnFZXV1Eh/s-l300.jpg'
	},														//Tablica z obiekatmi
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowidający historię króla sawanny',
		image: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},
	{
		id: 3,
		title: "Pan życia i śmierci",
		desc: "Film o handlarzu bronią",
		image: "http://www.placecage.com/g/155/300"
	},
	{
		id: 4,
		title: "Lot skazańców",
		desc: "Film o locie skazańców :)",
		image: "http://www.placecage.com/c/460/300"
	},
	{
		id: 5,
		title: "Bez twarzy",
		desc: "Kolejny świetny film z Nickiem :)",
		image: "http://www.placecage.com/c/200/300"
	},
];




//Title

var MovieTitle = React.createClass({
	propTypes:{
		title: React.PropTypes.object.isRequired,
	},

	render: function(){
		return(	React.createElement('h2', {}, this.props.movie.title) //funkcja render zawsze zwraca (return) ReactElement
		);
	}
});

//Description

var MovieDescription = React.createClass({
	propTypes:{
		desc: React.PropTypes.object.isRequired,
	},

	render: function(){
		return ( React.createElement('p', {}, this.props.movie.desc)
		);
	}
});

//Poster 

var MoviePoster = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},

	render: function(){
		return (React.createElement('img', {src: this.props.movie.image})
		);
	}
});

//Movie List

var MoviesList = React.createClass({
	render: function(){
		return (React.createElement('div', {},
					React.createElement('h1', {}, 'Lista Filmów'),
					React.createElement('ul', {}, 
						React.createElement('li', {key: this.props.movie.id},
							React.createElement(MovieTitle, this.props.movie.title),
							React.createElement(MovieDescription, this.props.movie.desc),
							React.createElement(MoviePoster, this.props.movie.image)
						)		
				));
	}
});




