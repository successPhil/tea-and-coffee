import '../css/Documentation.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UserContext from '../contexts/UserContext';
import { useContext, useState } from 'react';

const Documentation = () => {
    const [showAPIKEY, setShowAPIKEY] = useState(false)
    
    const handleShowApi = () => {
      setShowAPIKEY(!showAPIKEY)
    }

    const handleCopyApi = () => {
      if (showAPIKEY) {
        navigator.clipboard.writeText(userToken)
      }
    }

    const { userToken } = useContext(UserContext)

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
          Ensure you pass your API KEY in the header with every request. Refer to the endpoint documentation for required request bodies.
          Please ensure to treat the API KEY like a password. Abuse will end with your API KEY being blocked.
        </p>
        <div className='api-peek'>
          <button className='spoiler-button' onClick={handleShowApi}> 
            {showAPIKEY ? <VisibilityIcon /> : <VisibilityOffIcon />} 
            Show API KEY 
          </button>
          {/* {showAPIKEY && ( */}
            <div className={`api-display ${showAPIKEY ? '' : 'hide-key'}`}>
            {/* <div className={`api-display-overlay ${showAPIKEY ? '' : 'hidden'}`}></div> */}
          
          {showAPIKEY ? (
            <>
              <p>{userToken}</p>
              <button className='copyButton' onClick={handleCopyApi}> 
                <ContentCopyIcon />
              </button>
            </>
          )
          :
          (<div className='overlay'></div>)
          }
          </div>
        </div>

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