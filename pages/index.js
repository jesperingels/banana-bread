import Header from '../components/Header'
import Main from '../components/Main'

const Index = () => (
    <div>
      <div className="container">
        <Header/>
        <Main title="Hello world!"></Main>
      </div>
      <style jsx>{`
      .container { 
        
      }
    `}</style>
    </div>

  );
  
  export default Index;