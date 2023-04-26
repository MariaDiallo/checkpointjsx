
import './App.css';

function App() {
  return (
    <main>
      <div className="component">
        <header className="head">
          <img src="images/icon-star.svg" alt=""/>
        </header>
        <div className="Body">
          <div className="BodyTop">
            <p> How did we do?</p>
          </div>
          <div className="BodyButtom">
            <p>Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!</p>
          </div>
        </div>
        <div className="footer">
          <div className="footerTop">
            <div className="chiffre1">
              <p>1</p>
            </div>
            <div className="chiffre2">
              <p>2</p>
            </div>
            <div className="chiffre3">
              <p>3</p>
            </div>
            <div className="chiffre4">
              <p>4</p>
            </div>
            <div className="chiffre5">
              <p>5</p>
            </div>
          </div>
          <div className="footerButtom">
            <p>Submit</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
