const DndWikiData = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold">Max&apos;s DND Wiki</h1>
      <div className="divider divider-primary" />
      <h2 className="text-lg font-bold">Overview</h2>
      <p>
        I am currently working on a Dungeons and Dragons Wiki page. The goal is
        to create a community driven wiki page for Dungeons and Dragons. The
        project is still in its early stages, due to the massive amount of data,
        but I am excited to see where it goes.
        <br />
      </p>
      <div className="divider" />
      <h2 className="text-lg font-bold">Featuring</h2>
      <ul className="list-disc list-inside">
        <li>Responsive Design</li>
        <li>Community Driven</li>
        <li>User Authentication</li>
        <li>Lots and Lots of DND information.</li>
      </ul>
      <div className="divider" />
      <h2 className="text-lg font-bold">Technologies</h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>DaisyUI</li>
        <li>Prisma</li>
        <li>PostgreSQL</li>
        <li>NextAuth</li>
        <li>Vercel</li>
      </ul>
    </div>
  );
};

export default DndWikiData;
