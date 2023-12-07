import logo from "../../src/assets/coffeeLogo.png"
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Documentation from "./Documentation"

const Divider = () => {
    return <div style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }} />;
  };

export default function About() {
    return (
    <>
    
    <div className="add-a-coffee-left">
        <h4>Welcome to the Echo Coffee Co.!</h4>
        <ul>
            <li>Browse our coffee database</li>
            <li>Add your own coffees to the database</li>
            <li>Favorite, Leave reviews, and interact with the community!</li>
        </ul>
        </div>

    <div className="profile-logo"> 
    <img src={logo} alt="Company logo" className="about-image"/>
    </div>

    <div className="company-about">
    <Divider/>
    <h1>About Us</h1>
    <h3>Echo Tea & Coffee: A Tale of Coffee, Tea, and Wilderness</h3>
    <Divider/>
    <p>Welcome to Echo Tea & Coffee, where the wild side of brewing comes alive! Founded in 2023, our journey began in the lush wilderness, guided by four passionate safari guides with a shared love for coffee, tea, and wildlife conservation.</p>
    </div>
    <br/>
    <br/>
    <div className="main-content">
    <Divider/>
    <h2 className="sectionTitle">Our Beginnings</h2>
    <h2 className="sectionContentTitle">In the African Savannas</h2>
    <Divider/>
      <h3 className="sectionContentSubTitle">Training the intrepid spotted hyena</h3>
      <p className="sectionContent"> Our story is as unique as our brews. Amidst the African savannas, we started an unconventional experiment&mdash;training orphaned spotted hyenas to brew coffee and tea. Equipped with specialized machines tailored for their paws, these intelligent creatures amazed everyone with their brewing skills. Our first shop opened in Bermuda, bringing a piece of the wild to every cup. </p>
    <Divider/>
    </div>
    <br/>
    <div className="main-content">
    <Divider/>
    <p>However, our journey wasn't without its challenges. The hyenas, while skilled brewers, had a natural inclination that led to some... unexpected customer interactions. Facing the possibility of closing, fate intervened in the most extraordinary way.
      </p>
    </div>
    <br/>
    <br/>
    <div className="main-content">
    <Divider/>
    <h2 className="sectionContentTitle">The Fateful Storm</h2>
    <Divider/>
    <h3 className="sectionContentSubTitle">The Baboon Revolution</h3>
    <p className="sectionContent">We thought all was lost, but as fate would have it, a storm brought us a group of orphaned baboons, washed up on the beach in a 40-foot container during a storm! With these fury fellows, a new chapter began. Embracing our role as caretakers, we trained these remarkable baboons in the art of brewing and delivery. Their dexterity and friendly nature transformed our business, leading us to relocate to the United States, where we continue our unique blend of coffee, tea, and wildlife care.</p>
    <Divider/>
    </div>
    <br/>
    <br/>
    <button className="coffee-control-button"><span className='coffee-control-icon'><AutoAwesomeOutlinedIcon /></span> Suggest a feature</button>
     {/* <button className="coffee-control-button"><AutoAwesomeOutlinedIcon /> Suggest a feature</button> */}
   <Documentation/>
    
    </>)
}