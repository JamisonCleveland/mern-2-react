import Counter from './components/Counter';
import GitHub from './components/GitHub';

function App() {
  return (
    <div>
        <h1>Hello React!</h1>
        <h2>Jamison Cleveland - p33b442</h2>
        <hr/>
        <Counter incBy={1} init={7}/>
        <hr/>
        <Counter incBy={2} init={42}/>
        <hr/>
        <GitHub/>
        <hr/>
    </div>
  );
}

export default App;
