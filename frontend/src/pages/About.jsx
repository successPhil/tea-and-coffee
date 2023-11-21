import logo from "../pages/about/assets/Images/Logo_2.png"
import coffeeHyena from "../pages/about/assets/Images/hyenaBurrista.jpg"
import hyenaWorker from "../pages/about/assets/Images/hyenaWorker.jpg"
import hyenaMascot from "../pages/about/assets/Images/hyenaMascot.jpg"

const Divider = () => {
    return <div style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }} />;
  };

export default function About() {
    return (
    <>
    <h1>Starting the about Page</h1>
    <div className="profile-logo"> 
    <img src={logo} alt="Company logo"/>
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
    <div className="main-content-image-container">
    <div className="main-content-image">
      <img src={coffeeHyena}  alt="Spotted hyena working the coffee machine"/>
    </div>
     <div className="main-content-image">
        <img src={hyenaMascot}  alt="glorious hyena mascot"/>
     </div>
    <div className="main-content-image">
      <img src={hyenaWorker}  alt="Spotted hyena delivering coffee"/>
    </div>
   
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
   
    
    </>)
}