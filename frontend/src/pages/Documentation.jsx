{/* <h1> Introduction </h1>
<p> Welcome to Echo Tea and Coffee Co. You can use our api to access all
    API endpoints, which will pull information on coffee drinks and beans!

    Being in the early stages of development, its a great time to help us 
    develop our API. We are currently offering every free user the ability to fill our coffee
    database and submit new feature requests!

    Feel free We have a roadmap dynamically being updated that you can follow along with on Github.
    If we have enough requests we will open a discord server for our coffee aficionados.
</p>

<h1> Authentication </h1>
<p> We use API Keys to allow access to our API. The great news is just by signing up, you have already registered 
    for an API KEY. Our API's current model is free to use.

    Please ensure that you pass your APIKEY in the header with every request. Take a loot at the endpoint documentation
    to see the different bodies that must be passed into the request.
    <h2>Header</h2> {
        'Authorization': token <APIKEY>
    }
</p>
<h1> EndPoints </h1>
<h2>GET Methods</h2>
   api/v1/coffee/ 
   hitting this endpoint will return an object with all coffee's,
   coffees will contain user reviews and likes.

   api/v1/coffee/review/', include('coffee_reviews.urls')), 
   Hitting this endpoint will get you all of the reviews that belong 
   to a specific coffee

<h2>POST METHODS</h2>

    api/v1/coffee/
    This endpoint allows the user to add coffee to our database.
    Body {
    }

    api/v1/coffee/review/
    The user that is logged in is able to make a review on a single coffee object.
    Body {
    }
    
<h2>PUT Methods</h2>
    
    api/v1/coffee/review/
    The user is able to update their review on a coffee. A user should only get 1 review per coffee.
    

<h2>DELETE Methods</h2>
    
    api/v1/coffee/review
    The user that is logged in is able to delete a review they left on a coffee



       api/v1/coffee/likes/', include('coffee_reviews.urls')),
    
       api/v1/coffee/favorites/', include('users.urls')), */}
import '../components/css/Documentation.css'
       const Documentation = () => {
        return (
          <div className='documentationStyle'>
            <h1 className='headingStyle'>Introduction</h1>
            <p>
              Welcome to Echo Tea and Coffee Co. Use our API to access all endpoints, which provide information on coffee drinks and beans.
              We're in the early stages of development and invite you to help us by filling our coffee database and submitting feature requests!
              Check our dynamically updated roadmap on GitHub, and if there's enough interest, we'll open a Discord server for coffee aficionados.
            </p>
      
            <h1 className='headingStyle'>Authentication</h1>
            <p>
              We use API Keys for access. By signing up, you've registered for an API KEY. Our API is currently free to use.
              Ensure you pass your APIKEY in the header with every request. Refer to the endpoint documentation for required request bodies.
            </p>
            <div className='codeBlockStyle'>
              <h2>Header</h2>
              {'{ \'Authorization\': token <APIKEY> }'}
            </div>
      
            <h1 className='headingStyle'>Endpoints</h1>
      
            <h2 className='headingStyle'>GET Methods</h2>
            <p>
              <code>api/v1/coffee/</code><br />
              Hit this endpoint to get an object with all coffees, including user reviews and likes.
            </p>
      
            <p>
              <code>api/v1/coffee/review/</code><br />
              Hit this endpoint to get all reviews belonging to a specific coffee.
            </p>
      
            <h2 className='headingStyle'>POST Methods</h2>
            <p>
              <code>api/v1/coffee/</code><br />
              Use this endpoint to add coffee to our database.
            </p>
      
            <p>
              <code>api/v1/coffee/review/</code><br />
              The logged-in user can make a review on a single coffee object.
            </p>
      
            <h2 className='headingStyle'>PUT Methods</h2>
            <p>
              <code>api/v1/coffee/review/</code><br />
              The user can update their review on a coffee. A user should only have one review per coffee.
            </p>
      
            <h2 className='headingStyle'>DELETE Methods</h2>
            <p>
              <code>api/v1/coffee/review</code><br />
              The logged-in user can delete a review they left on a coffee.
            </p>
          </div>
        );
      };
      
      export default Documentation;