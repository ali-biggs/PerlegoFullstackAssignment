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
        link: 'https://www.amazon.co.uk/Brave-New-World-Aldous-Huxley/dp/0099518473/ref=sr_1_1?crid=1U2C9IEK6H51R&keywords=brave+new+world&qid=1667240452&qu=eyJxc2MiOiIzLjMxIiwicXNhIjoiMi40NiIsInFzcCI6IjIuNTgifQ%3D%3D&sprefix=brave+new+wo%2Caps%2C176&sr=8-1',
        id: 2
    },
    {
        img: klaraAndTheSun,
        title: 'Klara And The Sun',
        author: 'Kazuo Ishiguro',
        price: '£7.49',
        link: 'https://www.amazon.co.uk/Klara-Sun-Times-Sunday-Book/dp/057136490X/ref=sr_1_1?crid=111CGYSCJ1OYP&keywords=Klara+And+The+Sun%27&qid=1667240488&qu=eyJxc2MiOiIxLjQwIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=klara+and+the+sun+%2Caps%2C319&sr=8-1',
        id: 3
    },
    {
        img: kafka,
        title: 'Kafka On The Shore',
        author: 'Haruki Murakami',
        price: '£8.99',
        link: 'https://www.amazon.co.uk/Kafka-Shore-Vintage-Haruki-Murakami/dp/0099458322/ref=sr_1_1?crid=354TQ9JMWYEOT&keywords=Kafka+On+The+Shore%27&qid=1667240602&qu=eyJxc2MiOiIxLjQyIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=kafka+on+the+shore+%2Caps%2C192&sr=8-1',
        id: 4
    },
    {
        img: elifShafak,
        title: 'The Island of Missing Trees',
        author: 'Elif Shafak',
        price: '£7.49',
        link: 'https://www.amazon.co.uk/Island-Missing-Trees-Shortlisted-Costa/dp/0241988721/ref=sr_1_1?crid=C2XABJ0PESFW&keywords=The+Island+of+Missing+Trees%27&qid=1667240653&qu=eyJxc2MiOiIwLjg2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=the+island+of+missing+trees+%2Caps%2C105&sr=8-1',
        id: 5
    },
    {
        img: sapiens,
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: '£13.00',
        link: 'https://www.amazon.co.uk/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1667240689&sr=8-4',
        id: 6
    },
    {
        img: christineAffair,
        title: 'The Christine Affair',
        author: 'Nina de Gramont',
        price: '£7.49',
        link: 'https://www.amazon.co.uk/Christie-Affair-Nina-Gramont/dp/1529054192/ref=sr_1_2?crid=102NUBSFR09E6&keywords=The+Christine+Affair%27&qid=1667240734&sprefix=the+christine+affair+%2Caps%2C119&sr=8-2',
        id: 7
    },
    {
        img: howToKillYourFamily,
        title: 'How To Kill Your Family',
        author: 'Bella Mackie',
        price: '£4.50',
        link: 'https://www.amazon.co.uk/How-Kill-Your-Family-BESTSELLER/dp/0008365946/ref=sr_1_1?crid=30SFUSOVFENZG&keywords=How+To+Kill+Your+Family%27&qid=1667240767&qu=eyJxc2MiOiIwLjg2IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=how+to+kill+your+family+%2Caps%2C167&sr=8-1',
        id: 8
    },
    {
        img: diedTwice,
        title: 'The Man Who Died Twice',
        author: 'Richard Osman',
        price: '£4.50',
        link: 'https://www.amazon.co.uk/Died-Twice-Thursday-Murder-Club/dp/0241988241/ref=sr_1_1?crid=1Z7GZH5YO6KPS&keywords=The+Man+Who+Died+Twice&qid=1667240799&qu=eyJxc2MiOiIyLjQ3IiwicXNhIjoiMi4xMCIsInFzcCI6IjIuMTIifQ%3D%3D&sprefix=the+man+who+died+twice%2Caps%2C158&sr=8-1',
        id: 9
    },
    {
        img: guideToMurder,
        title: 'A Good Girls Guide to Murder',
        author: 'Holly Jackson',
        price: '£7.49',
        link: 'https://www.amazon.co.uk/Good-Girls-Guide-Murder/dp/1405293187/ref=sr_1_2?crid=1DAT4NMVOIKYV&keywords=a+good+girl%27s+guide+to+murder%27&qid=1667240836&sprefix=a+good+girls+guide+to+murder+%2Caps%2C100&sr=8-2',
        id: 10
    },
    {
        img: sallyRooney,
        title: 'Beautiful World, Where Are You',
        author: 'Sally Ronney',
        price: '£4.50',
        link: 'https://www.amazon.co.uk/Beautiful-World-Where-Are-You/dp/0571365442/ref=sr_1_1?crid=2Z4K468DTNI9K&keywords=Beautiful+World%2C+Where+Are+You%27&qid=1667240867&qu=eyJxc2MiOiIwLjc5IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=beautiful+world+where+are+you+%2Caps%2C201&sr=8-1',
        id: 11
    },
    {
        img: midnightLibrary,
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: '£4.50',
        link: 'https://www.amazon.co.uk/Midnight-Library-Matt-Haig/dp/1786892731/ref=sr_1_1?crid=295ZKLJGJ8D9J&keywords=The+Midnight+Library&qid=1667240898&qu=eyJxc2MiOiIxLjgyIiwicXNhIjoiMS4zMSIsInFzcCI6IjEuMzYifQ%3D%3D&sprefix=the+midnight+library%2Caps%2C157&sr=8-1',
        id: 12
    },
    {
        img: witches,
        title: 'The Lighthouse Witches',
        author: 'C.J. Cooke',
        price: '£7.85',
        link: 'https://www.amazon.co.uk/Lighthouse-Witches-perfect-haunting-thriller/dp/0008455449/ref=sr_1_1?crid=6XWJYLR23QYU&keywords=The+Lighthouse+Witches&qid=1667240928&qu=eyJxc2MiOiIyLjA3IiwicXNhIjoiMi4wNCIsInFzcCI6IjEuNzgifQ%3D%3D&sprefix=the+lighthouse+witches%2Caps%2C179&sr=8-1',
        id: 13
    },
    {
        img: theTrees,
        title: 'The Trees',
        author: 'Percival Everett',
        price: '£9.19',
        link: 'https://www.amazon.co.uk/Trees-Everett/dp/1914391179/ref=sr_1_1?crid=33CP4GU9SDGXF&keywords=The+Trees&qid=1667240974&qu=eyJxc2MiOiIxLjc4IiwicXNhIjoiMS42MyIsInFzcCI6IjEuNjYifQ%3D%3D&sprefix=the+trees%2Caps%2C209&sr=8-1',
        id: 14
    },
    {
        img: bellJar,
        title: 'The Bell Jar',
        author: 'Sylvia Plath',
        price: '£7.66',
        link: 'https://www.amazon.co.uk/Bell-Faber-Paper-Covered-Editions/dp/0571081789/ref=sr_1_1?crid=3OAD6MX6MS3V7&keywords=The+Bell+Jar&qid=1667241006&qu=eyJxc2MiOiIyLjMxIiwicXNhIjoiMS43NCIsInFzcCI6IjEuOTIifQ%3D%3D&sprefix=the+bell+jar%2Caps%2C168&sr=8-1',
        id: 15
    },
];

export default itemData;