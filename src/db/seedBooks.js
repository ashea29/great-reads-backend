const Author = require('../models/Author')
const Book = require('../models/Book')

Author.findOne({ name: 'Tana French'})
  .then(author => {
    Book.create({
	    title: 'The Likeness (Dublin Murder Squad, #2)',
      author: author._id,
      description: 'In the “compellingˮ (The Boston Globe) and “pitch perfectˮ (Entertainment Weekly) follow-up to Tana French’s runaway bestseller In the Woods, itʼs six months later and Cassie Maddox has transferred out of the Dublin Murder Squad with no plans to go back—until an urgent telephone call summons her to a grisly crime scene. The victim looks exactly like Cassie and carries ID identifying herself as Alexandra Madison, an alias Cassie once used as an undercover cop. Cassie must discover not only who killed this girl, but, more important, who was this girl?',
      coverImgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538062804l/5941114._SY475_.jpg'
    })
    .then(newBook => {
      author.books.push(newBook)
      author.save()
	    console.log(`created book: ${newBook.title}`)
    })
  })

Author.findOne({ name: 'Tana French'})
  .then(author => {
    console.log(author)
    Book.create({
	    title: 'Faithful Place (Dublin Murder Squad #3)',
      author: author._id,
      description: 'Back in 1985, Frank Mackey was nineteen, growing up poor in Dublin\'s inner city and living crammed into a small flat with his family on Faithful Place. But he had his sights set on a lot more. He and his girl, Rosie Daly, were all set to run away to London together, get married, get good jobs, break away from factory work and poverty and their old lives.',
      coverImgURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550500994l/7093952._SX318_.jpg'
    })
    .then(newBook => {
      author.books.push(newBook)
      author.save()
	    console.log(`created book: ${newBook.title}`)
    })
  })

Author.findOne({ name: 'Robert Kurson' }).then(author => {
  Book.create({
    title:
      "Rocket Men: The Daring Odyssey of Apollo 8 and the Astronauts Who Made Man's First Journey to the Moon",
    author: author._id,
    description:
      "The inside, lesser-known story of NASA's boldest and riskiest mission: Apollo 8, mankind's first journey to the Moon on Christmas in 1968. A riveting account of three heroic astronauts who took one of the most dangerous space flights ever, from the New York Times bestselling author of Shadow Divers.",
    coverImgURL:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502143372l/35414997.jpg'
  }).then(newBook => {
    author.books.push(newBook)
    author.save()
    console.log(`created book: ${newBook.title}`)
  })
})

Author.findOne({ name: 'Robert Kurson' }).then(
  author => {
    Book.create({
      title:
        'Pirate Hunters: Treasure, Obsession, and the Search for a Legendary Pirate Ship',
      author: author._id,
      description:
        'A thrilling new adventure of danger and deep-sea diving, historic mystery and suspense, by the author of the New York Times bestseller Shadow Divers',
      coverImgURL:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432123218l/23164968.jpg'
    }).then(newBook => {
      author.books.push(newBook)
      author.save()
      console.log(`created book: ${newBook.title}`)
    })
  }
)

Author.findOne({ name: 'George R. R. Martin' }).then(
	author => {
		Book.create({
			title: 'A Clash of Kings (A Song of Ice and Fire #2)',
			author: author._id,
			description:
				'A comet the color of blood and flame cuts across the sky. Two great leaders—Lord Eddard Stark and Robert Baratheon—who hold sway over an age of enforced peace are dead, victims of royal treachery. Now, from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war.',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567840212l/10572.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)

Author.findOne({ name: 'George R. R. Martin' }).then(
	author => {
		Book.create({
			title:
				'A Storm of Swords (A Song of Ice and Fire #3)',
			author: author._id,
			description:
				'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, the victim of the jealous sorceress who holds him in her evil thrall. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Robb plots against his despised Lannister enemies, even as they hold his sister hostage at King’s Landing, the seat of the Iron Throne. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world. . . .',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427885895l/6307964.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)

Author.findOne({ name: 'George R. R. Martin' }).then(
	author => {
		Book.create({
			title:
				'A Feast for Crows (A Song of Ice and Fire #4)',
			author: author._id,
			description:
				'Bloodthirsty, treacherous and cunning, the Lannisters are in power on the Iron Throne in the name of the boy-king Tommen. The war in the Seven Kingdoms has burned itself out, but in its bitter aftermath new conflicts spark to life.',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429538615l/13497.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)

Author.findOne({ name: 'George R. R. Martin' }).then(
	author => {
		Book.create({
			title:
				'A Dance with Dragons (A Song of Ice and Fire #5)',
			author: author._id,
			description:
				'In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. As they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327885335l/10664113.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)

Author.findOne({ name: 'George R. R. Martin' }).then(
	author => {
		Book.create({
			title:
				'The Winds of Winter (A Song of Ice and Fire #6)',
			author: author._id,
			description:
				'The Winds of Winter is the forthcoming sixth novel in the epic fantasy series A Song of Ice and Fire by George R.R. Martin.  The previous installment, A Dance with Dragons, covered less story than Martin intended, omitting at least one planned large battle sequence and leaving several character threads ending in cliffhangers. Martin intends to resolve these cliffhangers "very early" in The Winds of Winter, saying "I\'m going to open with the two big battles that I was building up to, the battle in the ice and the battle at Meereen—the battle of Slaver\'s Bay. And then take it from there.',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465341854l/12111823._SY475_.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)

Author.findOne({ name: 'Ian Fleming' }).then(
	author => {
		Book.create({
			title: 'From Russia With Love (James Bond #5)',
			author: author._id,
			description:
				'James Bond is marked for death by the Soviet counterintelligence agency SMERSH in Ian Fleming’s masterful spy thriller, and the novel that President John F. Kennedy named one of his favourite books of all time.',
			coverImgURL:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440169210l/3764._SY475_.jpg'
		}).then(newBook => {
			author.books.push(newBook)
			author.save()
			console.log(`created book: ${newBook.title}`)
		})
	}
)