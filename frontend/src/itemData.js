import orwell from './Images/orwell.png';
import braveNewWorld from './Images/braveNewWorld.png';
import klaraAndTheSun from './Images/klaraAndTheSun.png';
import kafka from './Images/kafka.png';
import elifShafak from './Images/elifShafak.png';
import sapiens from './Images/sapiens.png';
import christineAffair from './Images/christineAffair.png';
import howToKillYourFamily from './Images/howToKillYourFamily.png';
import diedTwice from './Images/diedTwice.png';
import guideToMurder from './Images/guideToMurder.png';
import sallyRooney from './Images/sallyRooney.png';
import midnightLibrary from './Images/midnightLibrary.png';
import witches from './Images/witches.png';
import theTrees from './Images/theTrees.png';
import bellJar from './Images/bellJar.png';

export const itemData = [
    {
        img: orwell,
        title: '1984',
        author: 'George Orwell',
        price: '£6.85',
        synopsis: 'Hidden away in the Record Department of the sprawling Ministry of Truth, Winston Smith skilfully rewrites the past to suit the needs of the Party. Yet he inwardly rebels against the totalitarian world he lives in, which demands absolute obedience and controls him through the all-seeing telescreens and the watchful eye of Big Brother, symbolic head of the Party. In his longing for truth and liberty, Smith begins a secret love affair with a fellow-worker Julia, but soon discovers the true price of freedom is betrayal.',
        link: 'https://www.amazon.co.uk/Nineteen-Eighty-Four-Penguin-Modern-Classics/dp/0141393041',
        id: 1
    },
    {
        img: braveNewWorld,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        price: '£6.99',
        synopsis: 'Welcome to New London. Everybody is happy here. Our perfect society achieved peace and stability through the prohibition of monogamy, privacy, money, family and history itself. Now everyone belongs. You can be happy too. All you need to do is take your Soma pills. Discover the brave new world of Aldous Huxleys classic novel, written in 1932, which prophesied a society which expects maximum pleasure and accepts complete surveillance - no matter what the cost.',
        link: 'https://www.amazon.co.uk/Brave-New-World-Aldous-Huxley/dp/0099518473/ref=sr_1_1?crid=1U2C9IEK6H51R&keywords=brave+new+world&qid=1667240452&qu=eyJxc2MiOiIzLjMxIiwicXNhIjoiMi40NiIsInFzcCI6IjIuNTgifQ%3D%3D&sprefix=brave+new+wo%2Caps%2C176&sr=8-1',
        id: 2
    },
    {
        img: klaraAndTheSun,
        title: 'Klara And The Sun',
        author: 'Kazuo Ishiguro',
        price: '£7.49',
        synopsis: 'From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behaviour of those who come in to browse, and of those who pass in the street outside. She remains hopeful a customer will soon choose her, but when the possibility emerges that her circumstances may change for ever, Klara is warned not to invest too much in the promises of humans.',
        link: 'https://www.amazon.co.uk/Klara-Sun-Times-Sunday-Book/dp/057136490X/ref=sr_1_1?crid=111CGYSCJ1OYP&keywords=Klara+And+The+Sun%27&qid=1667240488&qu=eyJxc2MiOiIxLjQwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=klara+and+the+sun+%2Caps%2C319&sr=8-1',
        id: 3
    },
    {
        img: kafka,
        title: 'Kafka On The Shore',
        author: 'Haruki Murakami',
        price: '£8.99',
        synopsis: 'The aging Nakata, tracker of lost cats, who never recovered from a bizarre childhood affliction, finds his pleasantly simplified life suddenly turned upside down. As their parallel odysseys unravel, cats converse with people; fish tumble from the sky; a ghost-like pimp deploys a Hegel-spouting girl of the night; a forest harbours soldiers apparently un-aged since World War II. There is a savage killing, but the identity of both victim and killer is a riddle - one of many which combine to create an elegant and dreamlike masterpiece.',
        link: 'https://www.amazon.co.uk/Kafka-Shore-Vintage-Haruki-Murakami/dp/0099458322/ref=sr_1_1?crid=354TQ9JMWYEOT&keywords=Kafka+On+The+Shore%27&qid=1667240602&qu=eyJxc2MiOiIxLjQyIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=kafka+on+the+shore+%2Caps%2C192&sr=8-1',
        id: 4
    },
    {
        img: elifShafak,
        title: 'The Island of Missing Trees',
        author: 'Elif Shafak',
        price: '£7.49',
        synopsis: 'It is 1974 on the island of Cyprus. Two teenagers, from opposite sides of a divided land, meet at a tavern in the city they both call home. The tavern is the only place that Kostas, who is Greek and Christian, and Defne, who is Turkish and Muslim, can meet, in secret, hidden beneath the blackened beams from which hang garlands of garlic, chilli peppers and wild herbs. This is where one can find the best food in town, the best music, the best wine. But there is something else to the place: it makes one forget, even if for just a few hours, the world outside and its immoderate sorrows. In the centre of the tavern, growing through a cavity in the roof, is a fig tree. This tree will witness their hushed, happy meetings, their silent, surreptitious departures; and the tree will be there when the war breaks out, when the capital is reduced to rubble, when the teenagers vanish and break apart. Decades later in north London, sixteen-year-old Ada Kazantzakis has never visited the island where her parents were born. Desperate for answers, she seeks to untangle years of secrets, separation and silence. The only connection she has to the land of her ancestors is a Ficus Carica growing in the back garden of their home.',
        link: 'https://www.amazon.co.uk/Island-Missing-Trees-Shortlisted-Costa/dp/0241988721/ref=sr_1_1?crid=C2XABJ0PESFW&keywords=The+Island+of+Missing+Trees%27&qid=1667240653&qu=eyJxc2MiOiIwLjg2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=the+island+of+missing+trees+%2Caps%2C105&sr=8-1',
        id: 5
    },
    {
        img: sapiens,
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: '£13.00',
        synopsis: 'Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.',
        link: 'https://www.amazon.co.uk/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1667240689&sr=8-4',
        id: 6
    },
    {
        img: christineAffair,
        title: 'The Christine Affair',
        author: 'Nina de Gramont',
        price: '£7.49',
        synopsis: 'Agatha Christie’s world is one of glamorous society parties, country house weekends, and growing literary fame. Nan O’Dea’s world is something very different. Her attempts to escape a tough London upbringing during the Great War led to a life in Ireland marred by a hidden tragedy. After fighting her way back to England, she’s set her sights on Agatha. Because Agatha Christie has something Nan wants. And it’s not just her husband.',
        link: 'https://www.amazon.co.uk/Christie-Affair-Nina-Gramont/dp/1529054192/ref=sr_1_2?crid=102NUBSFR09E6&keywords=The+Christine+Affair%27&qid=1667240734&sprefix=the+christine+affair+%2Caps%2C119&sr=8-2',
        id: 7
    },
    {
        img: howToKillYourFamily,
        title: 'How To Kill Your Family',
        author: 'Bella Mackie',
        price: '£4.50',
        synopsis: 'They say you can’t choose your family. But you can kill them. Meet Grace Bernard. Daughter, sister, serial killer… Grace has lost everything. And she will stop at nothing to get revenge.',
        link: 'https://www.amazon.co.uk/How-Kill-Your-Family-BESTSELLER/dp/0008365946/ref=sr_1_1?crid=30SFUSOVFENZG&keywords=How+To+Kill+Your+Family%27&qid=1667240767&qu=eyJxc2MiOiIwLjg2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=how+to+kill+your+family+%2Caps%2C167&sr=8-1',
        id: 8
    },
    {
        img: diedTwice,
        title: 'The Man Who Died Twice',
        author: 'Richard Osman',
        price: '£4.50',
        synopsis: "Elizabeth has received a letter from an old colleague, a man with whom she has a long history. He's made a big mistake, and he needs her help. His story involves stolen diamonds, a violent mobster, and a very real threat to his life. As bodies start piling up, Elizabeth enlists Joyce, Ibrahim and Ron in the hunt for a ruthless murderer. And if they find the diamonds too? Well, wouldn't that be a bonus? But this time they are up against an enemy who wouldn't bat an eyelid at knocking off four septuagenarians. Can the Thursday Murder Club find the killer (and the diamonds) before the killer finds them?",
        link: 'https://www.amazon.co.uk/Died-Twice-Thursday-Murder-Club/dp/0241988241/ref=sr_1_1?crid=1Z7GZH5YO6KPS&keywords=The+Man+Who+Died+Twice&qid=1667240799&qu=eyJxc2MiOiIyLjQ3IiwicXNhIjoiMi4xMCIsInFzcCI6IjIuMTIifQ%3D%3D&sprefix=the+man+who+died+twice%2Caps%2C158&sr=8-1',
        id: 9
    },
    {
        img: guideToMurder,
        title: 'A Good Girls Guide to Murder',
        author: 'Holly Jackson',
        price: '£7.49',
        synopsis: "The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. But having grown up in the same small town that was consumed by the crime, Pippa Fitz-Amobi isn't so sure. When she chooses the case as the topic for her final project, she starts to uncover secrets that someone in town desperately wants to stay hidden. And if the real killer is still out there, how far will they go to keep Pip from the truth . . . ?",
        link: 'https://www.amazon.co.uk/Good-Girls-Guide-Murder/dp/1405293187/ref=sr_1_2?crid=1DAT4NMVOIKYV&keywords=a+good+girl%27s+guide+to+murder%27&qid=1667240836&sprefix=a+good+girls+guide+to+murder+%2Caps%2C100&sr=8-2',
        id: 10
    },
    {
        img: sallyRooney,
        title: 'Beautiful World, Where Are You',
        author: 'Sally Ronney',
        price: '£4.50',
        synopsis: "Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he'd like to travel to Rome with her. In Dublin, her best friend Eileen is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood. Alice, Felix, Eileen and Simon are still young - but life is catching up with them. They desire each other, they delude each other, they worry about sex and friendship and the times they live in. Will they find a way to believe in a beautiful world?",
        link: 'https://www.amazon.co.uk/Beautiful-World-Where-Are-You/dp/0571365442/ref=sr_1_1?crid=2Z4K468DTNI9K&keywords=Beautiful+World%2C+Where+Are+You%27&qid=1667240867&qu=eyJxc2MiOiIwLjc5IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=beautiful+world+where+are+you+%2Caps%2C201&sr=8-1',
        id: 11
    },
    {
        img: midnightLibrary,
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: '£4.50',
        synopsis: "Nora's life has been going from bad to worse. Then at the stroke of midnight on her last day on earth she finds herself transported to a library. There she is given the chance to undo her regrets and try out each of the other lives she might have lived. Which raises the ultimate question: with infinite choices, what is the best way to live?",
        link: 'https://www.amazon.co.uk/Midnight-Library-Matt-Haig/dp/1786892731/ref=sr_1_1?crid=295ZKLJGJ8D9J&keywords=The+Midnight+Library&qid=1667240898&qu=eyJxc2MiOiIxLjgyIiwicXNhIjoiMS4zMSIsInFzcCI6IjEuMzYifQ%3D%3D&sprefix=the+midnight+library%2Caps%2C157&sr=8-1',
        id: 12
    },
    {
        img: witches,
        title: 'The Lighthouse Witches',
        author: 'C.J. Cooke',
        price: '£7.85',
        synopsis: "Upon the cliffs of a remote Scottish island stands a lighthouse. Strange and terrible events have happened here. It started with a witch hunt. Now, centuries later, islanders are vanishing. Liv Stay and her children don’t believe in witches or curses. But within months of arriving on the island, her daughter Luna is the only one of them left. Twenty years later, Luna’s missing sister turns up out of the blue. She is exactly the girl Luna remembers. Same face. Same smile. Same age.",
        link: 'https://www.amazon.co.uk/Lighthouse-Witches-perfect-haunting-thriller/dp/0008455449/ref=sr_1_1?crid=6XWJYLR23QYU&keywords=The+Lighthouse+Witches&qid=1667240928&qu=eyJxc2MiOiIyLjA3IiwicXNhIjoiMi4wNCIsInFzcCI6IjEuNzgifQ%3D%3D&sprefix=the+lighthouse+witches%2Caps%2C179&sr=8-1',
        id: 13
    },
    {
        img: theTrees,
        title: 'The Trees',
        author: 'Percival Everett',
        price: '£9.19',
        synopsis: "The Trees is a page-turner that opens with a series of brutal murders in the rural town of Money, Mississippi. When a pair of detectives from the Mississippi Bureau of Investigation arrive, they meet expected resistance from the local sheriff, his deputy, the coroner, and a string of racist White townsfolk. ​ The murders present a puzzle, for at each crime scene there is a second dead body: that of a man who resembles Emmett Till, a young black boy lynched in the same town 65 years before. The detectives suspect that these are killings of retribution, but soon discover that eerily similar murders are taking place all over the country. Something truly strange is afoot. As the bodies pile up, the MBI detectives seek answers from a local root doctor who has been documenting every lynching in the country for years, uncovering a history that refuses to be buried.",
        link: 'https://www.amazon.co.uk/Trees-Everett/dp/1914391179/ref=sr_1_1?crid=33CP4GU9SDGXF&keywords=The+Trees&qid=1667240974&qu=eyJxc2MiOiIxLjc4IiwicXNhIjoiMS42MyIsInFzcCI6IjEuNjYifQ%3D%3D&sprefix=the+trees%2Caps%2C209&sr=8-1',
        id: 14
    },
    {
        img: bellJar,
        title: 'The Bell Jar',
        author: 'Sylvia Plath',
        price: '£7.66',
        synopsis: "Working as an intern for a New York fashion magazine in the summer of 1953, Esther Greenwood is on the brink of her future. Yet she is also on the edge of a darkness that makes her world increasingly unreal. Esther's vision of the world shimmers and shifts: day-to-day living in the sultry city, her crazed men-friends, the hot dinner dances . . . The Bell Jar, Sylvia Plath's only novel, is partially based on Plath's own life. It has been celebrated for its darkly funny and razor sharp portrait of 1950s society, and has sold millions of copies worldwide.",
        link: 'https://www.amazon.co.uk/Bell-Faber-Paper-Covered-Editions/dp/0571081789/ref=sr_1_1?crid=3OAD6MX6MS3V7&keywords=The+Bell+Jar&qid=1667241006&qu=eyJxc2MiOiIyLjMxIiwicXNhIjoiMS43NCIsInFzcCI6IjEuOTIifQ%3D%3D&sprefix=the+bell+jar%2Caps%2C168&sr=8-1',
        id: 15
    },
];

export default itemData;