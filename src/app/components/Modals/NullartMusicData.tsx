const NullartMusicData = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">Nulart Music</h1>
      <div className="divider divider-primary" />
      <h2 className="text-lg font-bold">Overview</h2>
      <p>
        Nullart is a small music producer who asked me to create a simple page
        for him to showcase his music. The front page features a audio
        visualizer animation that reacts to the music.
        <br />
      </p>
      <div className="divider" />
      <h2 className="text-lg font-bold">Featuring</h2>
      <ul className="list-disc list-inside">
        <li>Audio Visualizer</li>
        <li>Music Player</li>
        <li>Contact Form</li>
      </ul>
      <div className="divider" />
      <h2 className="text-lg font-bold">Technologies</h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>Vercel</li>
      </ul>
    </div>
  );
};

export default NullartMusicData;
