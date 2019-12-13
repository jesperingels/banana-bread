import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => (
    <div>
      <div className="container">
        <Header/>
        <Main title="Hello world!"></Main>
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

      

      body {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
    </div>

  );
  
  export default Index;