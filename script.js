
// REQUIREMENTS
// Prendi il contenuto di exampleUsers.json.
// Genera, per ogni elemento, una card contentente il nome, email, il paese di provenienza e il loro stipendio.
// - La card deve essere rosa se lo user è femmina e azzurra se maschio.
// - Se il campo 'isAdmin' è true mostra un'accordion all'interno della card che, se cliccata, espanderà
//   e mostrerà del testo e un bottone con label "Accedi al lato oscuro"



// Extra:
// - filtrare le card e dividile per uomini e donne.
// - Ordinare le card in base allo stipendio. (Da più basso a più alto)



// Per avviare il progetto 'npm run start' in shell


const array = [
	{
		"name": "Ifeoma Bishop",
		"email": "tempor.lorem@hotmail.net",
		"country": "Belgium",
		"address": "235-8859 Erat, Ave",
		"gender": "M",
		"isAdmin": false,
		"salary": 1160
	},
	{
		"name": "Harlan Farmer",
		"email": "sed.nec@aol.edu",
		"country": "New Zealand",
		"address": "P.O. Box 290, 4864 Justo Ave",
		"gender": "M",
		"isAdmin": false,
		"salary": 9499
	},
	{
		"name": "Adrienne Arnold",
		"email": "fringilla.porttitor.vulputate@yahoo.com",
		"country": "Italy",
		"address": "P.O. Box 371, 3439 Erat. Avenue",
		"gender": "F",
		"isAdmin": false,
		"salary": 15626
	},
	{
		"name": "Colorado Holcomb",
		"email": "nisi.a@outlook.net",
		"country": "Colombia",
		"address": "231 Metus Avenue",
		"gender": "F",
		"isAdmin": false,
		"salary": 8695
	},
	{
		"name": "Bernard Miranda",
		"email": "mollis.vitae@aol.edu",
		"country": "New Zealand",
		"address": "Ap #796-9988 Phasellus Avenue",
		"gender": "M",
		"isAdmin": false,
		"salary": 15938
	},
	{
		"name": "Kevyn Cervantes",
		"email": "magna.nam@icloud.couk",
		"country": "Belgium",
		"address": "P.O. Box 848, 6715 Fames Av.",
		"gender": "F",
		"isAdmin": true,
		"salary": 18562
	},
	{
		"name": "Xavier Potter",
		"email": "scelerisque.dui@hotmail.net",
		"country": "Canada",
		"address": "Ap #659-4823 Commodo Street",
		"gender": "F",
		"isAdmin": true,
		"salary": 18576
	},
	{
		"name": "Hadassah George",
		"email": "ante.dictum.mi@aol.edu",
		"country": "Norway",
		"address": "7259 Nec Avenue",
		"gender": "M",
		"isAdmin": false,
		"salary": 3538
	},
	{
		"name": "Lillith Lamb",
		"email": "mus.proin@google.net",
		"country": "Nigeria",
		"address": "Ap #891-2510 Laoreet St.",
		"gender": "M",
		"isAdmin": true,
		"salary": 4180
	},
	{
		"name": "Gail Richard",
		"email": "nisi.cum@icloud.net",
		"country": "Netherlands",
		"address": "153-324 Pellentesque Av.",
		"gender": "M",
		"isAdmin": false,
		"salary": 16390
	},
	{
		"name": "Macy Kemp",
		"email": "vitae.velit.egestas@google.ca",
		"country": "Italy",
		"address": "P.O. Box 610, 2652 Vestibulum Street",
		"gender": "M",
		"isAdmin": true,
		"salary": 14954
	},
	{
		"name": "Kasper Barry",
		"email": "adipiscing.enim@outlook.com",
		"country": "South Africa",
		"address": "Ap #183-3157 Enim Road",
		"gender": "F",
		"isAdmin": false,
		"salary": 6242
	},
	{
		"name": "Kato Cervantes",
		"email": "dui.suspendisse@aol.couk",
		"country": "Mexico",
		"address": "Ap #692-5486 Aliquam St.",
		"gender": "F",
		"isAdmin": true,
		"salary": 19549
	},
	{
		"name": "Cullen Ferrell",
		"email": "porttitor.interdum.sed@protonmail.edu",
		"country": "Italy",
		"address": "931-7518 Tincidunt Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 18157
	},
	{
		"name": "Ori Snow",
		"email": "gravida.mauris.ut@outlook.edu",
		"country": "Pakistan",
		"address": "Ap #190-9053 Leo. St.",
		"gender": "F",
		"isAdmin": true,
		"salary": 16072
	},
	{
		"name": "Guy Alston",
		"email": "elit.etiam@yahoo.edu",
		"country": "Chile",
		"address": "683-2684 Dolor. Ave",
		"gender": "M",
		"isAdmin": true,
		"salary": 6382
	},
	{
		"name": "Catherine Gordon",
		"email": "gravida.aliquam.tincidunt@yahoo.org",
		"country": "Canada",
		"address": "Ap #503-6880 Malesuada Ave",
		"gender": "M",
		"isAdmin": true,
		"salary": 3285
	},
	{
		"name": "Price Savage",
		"email": "nec.tempus@aol.org",
		"country": "Brazil",
		"address": "Ap #354-1736 Non Av.",
		"gender": "M",
		"isAdmin": false,
		"salary": 16118
	},
	{
		"name": "Quemby Sparks",
		"email": "dolor.fusce.mi@hotmail.org",
		"country": "Canada",
		"address": "6168 Metus. Road",
		"gender": "F",
		"isAdmin": true,
		"salary": 16321
	},
	{
		"name": "Bruno Rodgers",
		"email": "neque.venenatis@icloud.com",
		"country": "Spain",
		"address": "Ap #970-6064 Velit Ave",
		"gender": "F",
		"isAdmin": true,
		"salary": 8629
	},
	{
		"name": "Mufutau Bates",
		"email": "orci@google.ca",
		"country": "Spain",
		"address": "396-2853 Sit St.",
		"gender": "M",
		"isAdmin": false,
		"salary": 14923
	},
	{
		"name": "Palmer Watkins",
		"email": "id.enim@yahoo.net",
		"country": "Canada",
		"address": "352-9483 Enim Av.",
		"gender": "F",
		"isAdmin": true,
		"salary": 8580
	},
	{
		"name": "Leonard O'brien",
		"email": "in@google.edu",
		"country": "New Zealand",
		"address": "883-5599 Tincidunt St.",
		"gender": "F",
		"isAdmin": true,
		"salary": 1126
	},
	{
		"name": "Zephania Crawford",
		"email": "aliquet.metus@aol.org",
		"country": "Philippines",
		"address": "Ap #572-2939 Aliquet Road",
		"gender": "M",
		"isAdmin": false,
		"salary": 9037
	},
	{
		"name": "Cyrus Singleton",
		"email": "vitae.mauris.sit@icloud.com",
		"country": "Indonesia",
		"address": "446-1676 Velit. Av.",
		"gender": "F",
		"isAdmin": true,
		"salary": 9932
	},
	{
		"name": "Edward Zimmerman",
		"email": "risus@yahoo.edu",
		"country": "Russian Federation",
		"address": "3100 Nec Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 840
	},
	{
		"name": "Claudia Douglas",
		"email": "arcu@yahoo.edu",
		"country": "Philippines",
		"address": "256-9155 Aliquam, St.",
		"gender": "F",
		"isAdmin": false,
		"salary": 12170
	},
	{
		"name": "Athena Vaughan",
		"email": "id.ante@icloud.org",
		"country": "Sweden",
		"address": "Ap #469-243 Diam Ave",
		"gender": "M",
		"isAdmin": false,
		"salary": 10920
	},
	{
		"name": "Hector Hawkins",
		"email": "ante.nunc@outlook.net",
		"country": "South Africa",
		"address": "P.O. Box 579, 3242 Purus. Ave",
		"gender": "M",
		"isAdmin": false,
		"salary": 2313
	},
	{
		"name": "Hayfa Whitfield",
		"email": "nulla.donec@google.com",
		"country": "Brazil",
		"address": "3193 Adipiscing Street",
		"gender": "M",
		"isAdmin": false,
		"salary": 5873
	},
	{
		"name": "Leo Cantrell",
		"email": "tincidunt@protonmail.ca",
		"country": "Norway",
		"address": "521-199 Facilisis Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 7770
	},
	{
		"name": "Zena Pacheco",
		"email": "magna.nec@hotmail.edu",
		"country": "South Korea",
		"address": "8124 Ligula Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 18447
	},
	{
		"name": "Louis Benton",
		"email": "tristique@google.couk",
		"country": "Chile",
		"address": "2668 Tempor St.",
		"gender": "M",
		"isAdmin": false,
		"salary": 8818
	},
	{
		"name": "Judah Bray",
		"email": "urna@icloud.org",
		"country": "Philippines",
		"address": "582-6294 Dapibus Road",
		"gender": "F",
		"isAdmin": true,
		"salary": 2704
	},
	{
		"name": "Ruby Bright",
		"email": "mauris.suspendisse@google.ca",
		"country": "Australia",
		"address": "Ap #468-3761 Lorem Road",
		"gender": "M",
		"isAdmin": true,
		"salary": 19073
	},
	{
		"name": "Hammett Mclean",
		"email": "et@icloud.ca",
		"country": "Poland",
		"address": "221-1533 Amet Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 13294
	},
	{
		"name": "Timon Weber",
		"email": "pretium.et@aol.couk",
		"country": "Mexico",
		"address": "P.O. Box 215, 8370 Nullam Street",
		"gender": "M",
		"isAdmin": false,
		"salary": 15297
	},
	{
		"name": "Laura Petty",
		"email": "ligula.donec@protonmail.net",
		"country": "Ireland",
		"address": "Ap #286-9857 Non, Avenue",
		"gender": "F",
		"isAdmin": true,
		"salary": 10571
	},
	{
		"name": "Lynn Morris",
		"email": "ac.fermentum@icloud.net",
		"country": "Pakistan",
		"address": "576-5889 Nulla Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 5625
	},
	{
		"name": "Neil Reyes",
		"email": "iaculis.aliquet@hotmail.com",
		"country": "United Kingdom",
		"address": "430-6801 Nam Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 7757
	},
	{
		"name": "Darrel Burns",
		"email": "sollicitudin.a.malesuada@hotmail.ca",
		"country": "Vietnam",
		"address": "9604 Ac Av.",
		"gender": "F",
		"isAdmin": false,
		"salary": 11444
	},
	{
		"name": "Silas Le",
		"email": "nunc.sit.amet@protonmail.com",
		"country": "Colombia",
		"address": "P.O. Box 533, 2231 Varius Ave",
		"gender": "F",
		"isAdmin": false,
		"salary": 3897
	},
	{
		"name": "Salvador Mccullough",
		"email": "dui.cum@icloud.com",
		"country": "Austria",
		"address": "6482 Euismod Rd.",
		"gender": "M",
		"isAdmin": false,
		"salary": 5941
	},
	{
		"name": "Thane O'brien",
		"email": "enim.gravida.sit@outlook.ca",
		"country": "Pakistan",
		"address": "795-3107 Velit. Ave",
		"gender": "M",
		"isAdmin": true,
		"salary": 3891
	},
	{
		"name": "Ishmael Cobb",
		"email": "nibh.enim.gravida@outlook.org",
		"country": "China",
		"address": "9067 Consequat Road",
		"gender": "M",
		"isAdmin": true,
		"salary": 7543
	},
	{
		"name": "Marah Mcguire",
		"email": "massa@yahoo.ca",
		"country": "Ukraine",
		"address": "977-5014 Donec St.",
		"gender": "M",
		"isAdmin": true,
		"salary": 10873
	},
	{
		"name": "Jerome Michael",
		"email": "lobortis.ultrices@yahoo.ca",
		"country": "New Zealand",
		"address": "Ap #477-7690 Varius Ave",
		"gender": "M",
		"isAdmin": false,
		"salary": 19968
	},
	{
		"name": "Kylee Mccoy",
		"email": "elit@google.edu",
		"country": "Costa Rica",
		"address": "4236 Scelerisque Road",
		"gender": "F",
		"isAdmin": true,
		"salary": 19801
	},
	{
		"name": "Meghan Tucker",
		"email": "enim.consequat.purus@outlook.ca",
		"country": "South Africa",
		"address": "1213 Ornare, Av.",
		"gender": "F",
		"isAdmin": true,
		"salary": 1006
	},
	{
		"name": "Barry Townsend",
		"email": "elementum.dui@yahoo.com",
		"country": "France",
		"address": "Ap #227-9381 Urna Rd.",
		"gender": "M",
		"isAdmin": false,
		"salary": 3609
	},
	{
		"name": "Aimee Salas",
		"email": "arcu@protonmail.couk",
		"country": "Peru",
		"address": "9372 Nec, Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 7005
	},
	{
		"name": "Abraham Crawford",
		"email": "metus.vivamus@yahoo.edu",
		"country": "United Kingdom",
		"address": "6079 Cras St.",
		"gender": "F",
		"isAdmin": false,
		"salary": 7040
	},
	{
		"name": "Jack Mills",
		"email": "semper.egestas@protonmail.ca",
		"country": "France",
		"address": "P.O. Box 438, 5062 Amet, Av.",
		"gender": "F",
		"isAdmin": true,
		"salary": 15340
	},
	{
		"name": "Acton Carrillo",
		"email": "curabitur.vel.lectus@aol.couk",
		"country": "China",
		"address": "Ap #427-6429 Lorem, St.",
		"gender": "M",
		"isAdmin": true,
		"salary": 9338
	},
	{
		"name": "Olivia Bolton",
		"email": "dui.cum@google.org",
		"country": "Costa Rica",
		"address": "Ap #262-7495 Lacus. Av.",
		"gender": "F",
		"isAdmin": false,
		"salary": 4541
	},
	{
		"name": "Irma House",
		"email": "auctor.quis@aol.couk",
		"country": "France",
		"address": "9632 Sem Street",
		"gender": "M",
		"isAdmin": false,
		"salary": 9496
	},
	{
		"name": "Shafira Randolph",
		"email": "aliquet@hotmail.org",
		"country": "Chile",
		"address": "Ap #458-9469 Proin Avenue",
		"gender": "M",
		"isAdmin": false,
		"salary": 13254
	},
	{
		"name": "Chaim Nguyen",
		"email": "diam.at.pretium@outlook.org",
		"country": "Nigeria",
		"address": "Ap #335-6682 Pede, Av.",
		"gender": "M",
		"isAdmin": false,
		"salary": 19017
	},
	{
		"name": "Alea Gilliam",
		"email": "parturient.montes@google.edu",
		"country": "Sweden",
		"address": "4513 Id Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 16130
	},
	{
		"name": "Brody Holden",
		"email": "aliquet.proin.velit@outlook.edu",
		"country": "France",
		"address": "6519 Nisi St.",
		"gender": "M",
		"isAdmin": false,
		"salary": 15782
	},
	{
		"name": "Kirk Mcclure",
		"email": "mauris.eu@aol.couk",
		"country": "Belgium",
		"address": "6374 Placerat, Road",
		"gender": "F",
		"isAdmin": false,
		"salary": 8956
	},
	{
		"name": "Colt Mason",
		"email": "sed.nunc@aol.com",
		"country": "Belgium",
		"address": "Ap #379-3445 Quis St.",
		"gender": "F",
		"isAdmin": false,
		"salary": 4776
	},
	{
		"name": "Mohammad Rich",
		"email": "ullamcorper.nisl@icloud.org",
		"country": "Peru",
		"address": "P.O. Box 543, 9951 Tristique Street",
		"gender": "F",
		"isAdmin": true,
		"salary": 1160
	},
	{
		"name": "Karleigh Bailey",
		"email": "aliquam.erat.volutpat@yahoo.edu",
		"country": "Chile",
		"address": "P.O. Box 640, 7367 Arcu Street",
		"gender": "M",
		"isAdmin": false,
		"salary": 8755
	},
	{
		"name": "Tashya Soto",
		"email": "eu.ligula.aenean@google.edu",
		"country": "Spain",
		"address": "P.O. Box 280, 6288 Nunc Road",
		"gender": "F",
		"isAdmin": true,
		"salary": 1673
	},
	{
		"name": "Dale Hebert",
		"email": "tellus.aenean@outlook.ca",
		"country": "Nigeria",
		"address": "7049 Velit Road",
		"gender": "M",
		"isAdmin": true,
		"salary": 19110
	},
	{
		"name": "Rhoda Le",
		"email": "curae.donec.tincidunt@icloud.org",
		"country": "Indonesia",
		"address": "Ap #381-8247 Dolor, Road",
		"gender": "F",
		"isAdmin": false,
		"salary": 15222
	},
	{
		"name": "Lee Holland",
		"email": "quam.vel@yahoo.com",
		"country": "Norway",
		"address": "849-5413 Quisque St.",
		"gender": "F",
		"isAdmin": false,
		"salary": 6155
	},
	{
		"name": "Tiger Booker",
		"email": "proin.vel@yahoo.ca",
		"country": "Turkey",
		"address": "1133 Risus Rd.",
		"gender": "M",
		"isAdmin": true,
		"salary": 3042
	},
	{
		"name": "Mercedes Vasquez",
		"email": "magnis.dis@outlook.org",
		"country": "Pakistan",
		"address": "Ap #735-8679 Neque. St.",
		"gender": "M",
		"isAdmin": false,
		"salary": 10927
	},
	{
		"name": "Valentine Gamble",
		"email": "nisi.dictum.augue@yahoo.ca",
		"country": "South Africa",
		"address": "568-1169 Ridiculus Rd.",
		"gender": "F",
		"isAdmin": true,
		"salary": 14785
	},
	{
		"name": "Cameron Parker",
		"email": "risus.donec.egestas@hotmail.edu",
		"country": "Nigeria",
		"address": "3693 Tincidunt Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 6809
	},
	{
		"name": "Cameran Hall",
		"email": "nulla.eget@hotmail.com",
		"country": "Russian Federation",
		"address": "791-6707 Nulla. St.",
		"gender": "F",
		"isAdmin": false,
		"salary": 3645
	},
	{
		"name": "Skyler Freeman",
		"email": "amet.consectetuer.adipiscing@icloud.ca",
		"country": "Italy",
		"address": "461-2960 Nec Avenue",
		"gender": "M",
		"isAdmin": false,
		"salary": 13921
	},
	{
		"name": "Jason Frederick",
		"email": "at.lacus.quisque@hotmail.couk",
		"country": "China",
		"address": "478-6202 Pharetra Av.",
		"gender": "M",
		"isAdmin": false,
		"salary": 3759
	},
	{
		"name": "Jerry Marks",
		"email": "justo.eu@aol.ca",
		"country": "Norway",
		"address": "911-6079 Lobortis. Road",
		"gender": "M",
		"isAdmin": true,
		"salary": 3343
	},
	{
		"name": "Oren Coleman",
		"email": "mauris@hotmail.com",
		"country": "Mexico",
		"address": "P.O. Box 437, 5019 Dui Ave",
		"gender": "M",
		"isAdmin": true,
		"salary": 13196
	},
	{
		"name": "Shad Gutierrez",
		"email": "sapien@outlook.com",
		"country": "Nigeria",
		"address": "457-6404 Tellus. Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 8969
	},
	{
		"name": "Dale Carrillo",
		"email": "in.consequat@google.com",
		"country": "Austria",
		"address": "950-3664 Bibendum Avenue",
		"gender": "M",
		"isAdmin": false,
		"salary": 13901
	},
	{
		"name": "Quentin Tyler",
		"email": "proin.vel@aol.edu",
		"country": "Peru",
		"address": "Ap #992-593 Facilisi. Rd.",
		"gender": "F",
		"isAdmin": false,
		"salary": 8452
	}
]


  
// in base allo stipendio
array.sort((a, b) => a.salary - b.salary);



// in base allo stipendio
array.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});



///////////////////////////////////////////////////CREAZIONE CARTE

array.forEach((data) => { //la funzione
    creaCard(data)
})

function creaCard(data){ //la funzione
	// Card
    const card = document.createElement("div") //creo il div
    card.className = "container" //creo la ClassName

    const innerDiv = document.createElement("div") 
    innerDiv.className = "card"
    card.appendChild(innerDiv)

	// Cerchio
    const img = document.createElement("div")
    img.className = "circle"
    innerDiv.appendChild(img)

	// Titolo
    const vuoto = document.createElement("div")
    vuoto.className = "vuoto"
    vuoto.appendChild(document.createTextNode("Nome:"))
    innerDiv.appendChild(vuoto)

    const title = document.createElement("h1")
    title.className = "title"
    title.appendChild(document.createTextNode(data.name))
    innerDiv.appendChild(title)

	// Email
	const infoDiv = document.createElement("div") //creo il div
    infoDiv.className = "info-email" //metto nome div e metto il nome del ClassName
    innerDiv.appendChild(infoDiv) //con innerdiv lo aggancio

    const scritta = document.createElement("h3")
    scritta.className = "scritta-email"
    scritta.appendChild(document.createTextNode("La tua email:"))
    infoDiv.appendChild(scritta)

    const email = document.createElement("h3")
    email.className = "email"
    email.appendChild(document.createTextNode(data.email))
    infoDiv.appendChild(email) 

	//Città
	const cittaDiv = document.createElement("div")
    cittaDiv.className = "info-country"
    innerDiv.appendChild(cittaDiv)

    const scrittaC = document.createElement("h3")
    scrittaC.className = "scritta-country"
    scrittaC.appendChild(document.createTextNode("Di dove sei:"))
    cittaDiv.appendChild(scrittaC)

    const country = document.createElement("h3")
    country.className = "country"
    country.appendChild(document.createTextNode(data.country))
    cittaDiv.appendChild(country) 

	//Via
	const viaDiv = document.createElement("div")
    viaDiv.className = "info-address"
    innerDiv.appendChild(viaDiv)

    const scrittaA = document.createElement("h3")
    scrittaA.className = "scritta-address"
    scrittaA.appendChild(document.createTextNode("Via:"))
    viaDiv.appendChild(scrittaA)

    const address = document.createElement("h3")
    address.className = "address"
    address.appendChild(document.createTextNode(data.address))
    viaDiv.appendChild(address) 



//accordion
const menu2 = document.createElement("div")
menu2.className = "button1"
menu2.appendChild(document.createTextNode("CLICCAMI PUSSY"))
innerDiv.appendChild(menu2)

const menuScritta = document.createElement("p")
menuScritta.appendChild(document.createTextNode("E ora:"))
innerDiv.appendChild(menuScritta)

const lato = document.createElement("button")
lato.appendChild(document.createTextNode("Accedi al lato oscuro"))
menuScritta.appendChild(lato)


	//purchase
	const purchaseDiv = document.createElement("div")
    purchaseDiv.className = "purchase"
    innerDiv.appendChild(purchaseDiv)

    const active = document.createElement("button")
    active.className = "active"
    active.appendChild(document.createTextNode(data.salary))
	active.appendChild(document.createTextNode("€"))
    purchaseDiv.appendChild(active) 

    document.getElementById("id").appendChild(card)
}


//////////////////////////////////////////////////COLORI:

  const cardElements = document.querySelectorAll(".card"); //seleziono tutte le carte nella classe .card
  const button1Elements = document.querySelectorAll(".button1"); //// ADMIN

  array.forEach(function(item, index) {    //La funzione che mi permette di lavorare nell'inxex della pagina
    if (item.gender === "M") {
      cardElements[index].style.backgroundColor = "rgba(148,187,233,0.3)";
    } else if (item.gender === "F") {
      cardElements[index].style.backgroundColor = "rgba(238,174,202,0.3)";
    } else {
      cardElements[index].style.backgroundColor = "gray";
    }
    if (item.isAdmin === true) {
      button1Elements[index].style.display = "block";
    } else {
    }
  });



///funzione per accordion
const button1 = document.querySelectorAll(".button1");

button1.forEach((button1)=>{
  button1.addEventListener("click",()=>{
        const para = button1.nextElementSibling;
        const paraStyle = getComputedStyle(para);
        
        if(paraStyle.maxHeight == "0px"){
            para.style.cssText = " max-height: 200px; padding: 15px; opacity:1 ";
        } else {
            para.style.cssText = " opacity: 0 ";
        }
    })
})


