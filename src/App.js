import VisuallyHidden from './VisuallyHidden';

function Friend({ name, isOnline }) {
  // {isOnline && <div className="green-dot" />}
  return (
    <li className="friend">
      {isOnline && <VisuallyHidden>(Onliner)</VisuallyHidden>}
      {name}
    </li>
  );
}

function App() {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  )
}

export default App;