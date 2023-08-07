/*import logo from './logo.svg';
import './App.css';*/

const Header = (props) =>
{
  return (<h1>{props.course.name}</h1>);
}

const Content = (props) =>
{
  return(
  <><Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
    <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
    <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/></>
  );
}

const Total = (props) =>
{
  return (<p>Number of exercises: {props.course.parts[1].exercises + props.course.parts[2].exercises + props.course.parts[0].exercises}</p>);
}

const Part = (props) =>
{
  return (<p>{props.name} {props.exercises}</p>);
}

const App = () => {
  const course = {
    name: 'Half stack development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
  
      {
        name: 'Using props to pass data',
        exercises: 7
      },
  
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return(
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course}/>
    </div>  
  );
}
export default App;