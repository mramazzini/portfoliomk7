import exp from "constants";

const GameEngineData = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">C++ Game Engine / Game Builder</h1>
      <div className="divider divider-primary" />
      <h2 className="text-lg font-bold">Overview</h2>
      <p>
        This project is a two part project. The first part is a game engine and
        the second part is the game builder. The game engine is a 2D game engine
        that I created in C++. The game builder is a desktop application that
        allows you to create levels for the game engine, and launch the engine
        from the user interface.
      </p>
      <div className="divider" />
      <h2 className="text-lg font-bold">Featuring</h2>
      <ul className="list-disc list-inside">
        <li>2D Game Engine</li>
        <li>Game Builder</li>
        <li>Custom Physics Engine</li>
        <li>Custom Collision Detection</li>
        <li>Custom Event System</li>
        <li>Custom Input System</li>
        <li>Custom Asset Manager</li>
        <li>Import/Export Functionality</li>
        <li>Built in Console</li>
      </ul>
      <div className="divider" />
      <h2 className="text-lg font-bold">Technologies</h2>
      <ul className="list-disc list-inside">
        <li>C++</li>
        <li>SDL2</li>
        <li>OpenGL</li>
        <li>JSON</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Electron</li>
      </ul>
    </div>
  );
};

export default GameEngineData;
