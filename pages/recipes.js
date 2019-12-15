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
           text='For the banana bread: Position an oven rack in the bottom third of the oven and preheat to 325 degrees F. Generously spray a 9-by-5-inch loaf pan with nonstick spray and dust with flour.

           For the cheesecake swirl: Combine the cream cheese, granulated sugar, sour cream and egg in a large bowl and beat with a hand mixer until well combined; set aside.
           
           For the banana bread: Whisk together the flour, baking soda and salt in a medium bowl; set aside. Mash the granulated sugar and bananas in a large bowl to a paste. Whisk in the oil, vanilla and egg. Whisk in the flour mixture until just combined.
           
           Reserve 3/4 cup of the bread batter. Spread the remaining batter in the bottom of the prepared loaf pan. Spoon the cream cheese mixture over the batter and put the reserved 3/4 cup batter in a line down the center of the pan. Insert the tip of a paring knife into the batter and drag it through and up to swirl 5 to 6 times.'
            title="How to make banana bread"
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