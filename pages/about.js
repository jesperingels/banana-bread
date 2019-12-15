import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => (
    <div>
      <div className="container">
        <input id="checkbox" type="checkbox"></input>
        <div id="menu-button"></div>
        <Header/>
        <Main            
           src='/img/bananaBread.jpg' 
           text='The Banana originated in Southeast Asia (probably on the Malaysian archipelago) and spread from India, to the Philippines, New Guinea etc. It was cultivated by about 2,000 B.C., but these people were rice eaters, and wheat was unknown there, so breads were not part of their culture.

           Theophrastus (a Greek naturalist philosopher) around the 4th century B.C., in what is probably the first scientific book on botany, describes the banana plant.  We know that the Greeks made bread with honey, spices and fruits around the time of Pliny (23-79 A.D.), and we also know that Pliny had knowledge of the banana (he also described them in 77 A.D.)  So, could the Greeks have made any banana bread?
           A possibility, they made bread and had bananas.'
            title="About Banana bread"
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