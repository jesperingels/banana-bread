// Import Components
import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => (
    <div>
      <div className="container">

        {/* Used for CSS checkbox hack */}
        <input id="checkbox" type="checkbox"></input>
        <div id="menu-button"></div>

        {/* Use components */}
        <Header/>
        <Main  
          // Fill the component with content
           src='/img/4527-3-large.jpg' 
           text='I’ve received a lot of questions about freezing banana bread since I published the recipe, so let me share what works. You can freeze banana bread using these instructions to preserve its fresh flavor and texture for months!
           Cool baked banana bread completely.
            Tightly wrap the loaf or slices (individually or grouped) in 2-3 layers of plastic wrap or aluminum foil.
            Place wrapped banana bread in a large freezer-friendly storage bag or reusable container.
            Date the bag and freeze for up to 3-4 months. Thaw wrapped or unwrapped in the refrigerator or at room temperature. All methods work like a charm!
            I like to freeze banana bread in slices because the slices thaw much quicker– even by lunchtime!'
            title="Whole-Grain Banana Bread"
            subtitle1="Prep"
            subtext1="10 mins"
            subtitle2="Bake"
            subtext2="1hr to 1hr 15mins"
            subtitle3="Total"
            subtext3="1hr 10mins"
            subtitle4="Yield"
            subtext4="1 loaf, 12 generous servings"
            button1="Save Recipe"
            button2="Print"
        
        />
      </div>

      {/* Add global styling */}
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

      .container { 
        display: grid;
        // grid-template-rows: 100px 1fr;
        // grid-template-columns: 1fr 700px 1fr;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        padding: 15px;
      }

      #menu-button {
        background-image: url(/img/hamburger.svg);
        height: 20px;
        width: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        z-index: 999;
      }

      #checkbox {
        z-index: 1000;
        position: absolute;
        height: 20px;
        width: 20px;
        opacity: 0;
      }

      input:checked ~ nav{
        display:flex;
      }

      input:checked + #menu-button {
        background-image: url("/img/cross.svg");
      }

      body {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }

      @media screen and (min-width: 576px) {
        #checkbox {
          display:none;
        }

        #menu-button {
          display:none;
        }

      }

    `}</style>
    </div>

  );
  
  export default Index;